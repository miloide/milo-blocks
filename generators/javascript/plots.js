/**
 * @license
 * Milo IDE
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Plot blocks for Milo (github.com/4and4/MiloServer).
 *
 *
 * @author Arjun Rao, Ayush Bihani
 */

'use strict';
goog.provide('Blockly.JavaScript.plots');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['plot_scatter'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_class = Blockly.JavaScript.valueToCode(block, 'CLASS', Blockly.JavaScript.ORDER_ATOMIC);
    var colour_hue = block.getFieldValue('HUE');
    var checkbox_connect = block.getFieldValue('Connect') == 'TRUE';
    if (value_class.length == 0) value_class = '""'
    var code = '{\n'+
        '"type":"scatter",\n'+
        '"name":"'+ value_name +'"'+
        ',\n"x":'+ value_x +
        ',\n"y":'+ value_y +
        ',\n"group":'+ value_class +
        ',\n"marker": {"color":"'+ colour_hue +'"}'+
        ',\n"isLine":'+ checkbox_connect +
        '\n},\n'
    ;
    return code;
};

Blockly.JavaScript['plot_bar'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_class = Blockly.JavaScript.valueToCode(block, 'CLASS', Blockly.JavaScript.ORDER_ATOMIC);
    var colour_hue = block.getFieldValue('HUE');
    if (value_class.length == 0) value_class = '""'
    var code = '{\n'+
        '"type":"bar",\n'+
        '"name":"'+ value_name +'"'+
        ',\n"x":'+ value_x +
        ',\n"y":'+ value_y +
        ',\n"group":'+ value_class +
        ',\n"marker": {"color":"'+ colour_hue +'"}'+
        '\n},\n'
    ;
    return code;
};

Blockly.JavaScript['plot_histogram'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var colour_hue = block.getFieldValue('HUE');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\n'+
        '"type":"histogram",\n'+
        '"name":"'+ value_name +'"'+
        ',\n"x":'+ value_x +
        ',\n"marker": {"color":"'+ colour_hue +'"},'+
        '\n},\n'
    ;
    return code;
};

Blockly.JavaScript['plot_title'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var code = '{\n\t"type":"plot_title",\n\t"value":"'+text_name+'"\n},\n';
  return code;
};

Blockly.JavaScript['plot_x_title'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var code = '{\n\t"type":"plot_xlabel",\n\t"value":"'+text_name+'"\n},\n';
  return code;
};

Blockly.JavaScript['plot_y_title'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var code = '{\n\t"type":"plot_ylabel",\n\t"value":"'+text_name+'"\n},\n';
  return code;
};

Blockly.JavaScript['plot_show'] = function(block) {
  var statements_data = Blockly.JavaScript.statementToCode(block, 'DATA');
  var statements_options = Blockly.JavaScript.statementToCode(block, 'Options');
  var plotVar = Blockly.JavaScript.variableDB_.getDistinctName(
      'plot', Blockly.Variables.NAME_TYPE);

  var newPlot = "var "+ plotVar +" = new Plot();";
  var setData = plotVar +".setData([\n"+statements_data+"\n]);";
  var setOptions = statements_options.length!=0?plotVar +".setOptions([\n"+statements_options+"\n]);":"";
  var showPlot = plotVar +".show()";
  var code = [newPlot,setData,setOptions,showPlot].join("\n");
  return code;
};


Blockly.JavaScript['function_plot_x_var'] = function(block){
    var code = 'x';
    return code;
};

Blockly.JavaScript['function_plot'] = function(block) {
    var expression = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var colour_hue = block.getFieldValue('HUE');

    var code = '{\n'+
            '"Function":"'+ expression + '"' +
            '\n, "type":"scatter",\n'+
            '"name":"'+ "Function" +'"'+
            ',\n"marker": {"color":"'+ colour_hue +'"}'+
            ',\n"isLine":'+ true +
            '\n},\n';
    return code;
};

Blockly.JavaScript['function_plot_y'] = function(block) {
  var expression = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var number_range_min = parseFloat(block.getFieldValue('range_min'));
  var number_range_max = parseFloat(block.getFieldValue('range_max'));
  var number_increment = parseFloat(block.getFieldValue('increment'));
  var code = '{\n'+
        '"Function":"'+ expression +'"'+
        '\n, "type":"scatter",\n'+
        '"name":"'+ "Function" +'"'+
        ',\n"min":'+ number_range_min +
        ',\n"max":'+ number_range_max +
        ',\n"inc":'+ number_increment +
        ',\n"marker": {"color":"'+ "" +'"}'+
        ',\n"isLine":'+ true +
        '\n},\n';
  return code;
};

Blockly.JavaScript['straight_line'] = function(block) {
  var number_slope = block.getFieldValue('slope');
  var number_constant = block.getFieldValue('constant');
  var code = number_slope + '*x + ' + number_constant;
  return [code, Blockly.JavaScript.ORDER_MULTIPLICATION];
};


Blockly.JavaScript['plot_distributions'] = function(block) {
  var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
  var value_label = Blockly.JavaScript.valueToCode(block, 'LABEL', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('COLOR');
  var code = '\n'+value_f+'.render('+ value_label + ',' +colour_color + ')\n';
  return code;
};
