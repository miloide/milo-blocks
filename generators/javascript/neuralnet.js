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
 * @fileoverview Neural Network generators (github.com/4and4/MiloServer).
 *
 *
 * @author Arjun Rao, Ayush Bihani
 */
goog.require('Blockly.JavaScript');

Blockly.JavaScript['tf_conv2d'] = function(block) {
  var value_input_dim = Blockly.JavaScript.valueToCode(block, 'input_dim', Blockly.JavaScript.ORDER_ATOMIC);
  var number_size = block.getFieldValue('size');
  var number_strides = block.getFieldValue('strides');
  var number_filter = block.getFieldValue('filter');
  var dropdown_activation = block.getFieldValue('activation');
  var code = '{\n'+
      '"type":"conv2d",\n'+
      '"inputShape":'+value_input_dim+',\n'+
      '"kernelSize":'+number_size+',\n'+
      '"filters":'+number_filter+',\n'+
      '"strides":'+number_strides+',\n'+
      '"activation":'+dropdown_activation+
  '\n}';
  return code;
};

Blockly.JavaScript['tf_dense_layer'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'units', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_activation = block.getFieldValue('activation');
  var checkbox = block.getFieldValue("bias") == 'TRUE';
  var code = '{\n'+
    '\t "type":"dense",\n'+
    '\t "units":'+ value_name+',\n'+
    '\t "bias":' + checkbox+',\n'+
    '\t "activation":"' + dropdown_activation+'"\n'+
    '},\n'
  return code;
};

Blockly.JavaScript['tf_neural_network'] = function(block) {
  var statements_model = Blockly.JavaScript.statementToCode(block, 'model');
  var setOptions = Blockly.JavaScript.statementToCode(block, 'NAME');
  var number_features = block.getFieldValue('features');
  if(setOptions.length > 0){
    var code = 'new NeuralNetwork('+ number_features +',['+statements_model +'],['+ setOptions +'])';
  } else {
    var code = 'new NeuralNetwork('+ number_features+',['+ statements_model+'])';
  }
  return [code,Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['tf_neural_network_train'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_epochs = Blockly.JavaScript.valueToCode(block, 'epochs', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_model +'.train('+ value_epochs + ','+ value_x + ','+ value_y+');\n';
  return code;
};

Blockly.JavaScript['tf_neural_network_predict'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_tensor = Blockly.JavaScript.valueToCode(block, 'tensor', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_model +'.predict('+ value_tensor +')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tf_neural_network_optimizer'] = function(block) {
  var dropdown_optimizer = block.getFieldValue('optimizer');
  var value_rate = Blockly.JavaScript.valueToCode(block, 'rate', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{\n\t "type" : "optimizer",\n\t "optimizer" : "' + dropdown_optimizer + '",\n\t "value":'+value_rate+'\n},\n';
  return code;
};

Blockly.JavaScript['tf_neural_network_loss'] = function(block) {
  var dropdown_loss = block.getFieldValue('loss');
  var code = '{\n\t "type":"loss" ,\n\t "value": "' + dropdown_loss+'"\n},\n';
  return code;
};

Blockly.JavaScript['tf_neural_network_metrics'] = function(block) {
  var dropdown_metrics = block.getFieldValue('metrics');
  var code = '{\n\t "type":"metrics" ,\n\t "value": "'+dropdown_metrics+'"\n},\n';
  return code;
};
