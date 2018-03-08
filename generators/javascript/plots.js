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
    var colour_hue = block.getFieldValue('HUE');
    var checkbox_connect = block.getFieldValue('Connect') == 'TRUE';

    var code = '{\n'+
        '"type":"scatter",\n'+
        '"name":"'+ value_name +'"'+
        ',\n"x":'+ value_x +
        ',\n"y":'+ value_y +
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
    var colour_hue = block.getFieldValue('HUE');

    var code = '{\n'+
        '"type":"bar",\n'+
        '"name":"'+ value_name +'"'+
        ',\n"x":'+ value_x +
        ',\n"y":'+ value_y +
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


Blockly.JavaScript['function_plot_x'] = function(block){
    var code = 'x';
    return code;
};

Blockly.JavaScript['function_plot'] = function(block) {
var expression = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
var colour_hue = block.getFieldValue('HUE');
var x_ = [], y_ = [];
for(var i = -10;i <= 10; i++){
    x_.push(i);
    var x = i;
    y_.push(eval(expression));
}
var code = '{\n'+
        '"Function":'+ expression+
        '\n, "type":"scatter",\n'+
        '"name":"'+ "Function" +'"'+
        ',\n"x":['+ x_ +']'+
        ',\n"y":['+ y_ +']'+
        ',\n"marker": {"color":"'+ colour_hue +'"}'+
        ',\n"isLine":'+ true +
        '\n},\n';
return code;
};