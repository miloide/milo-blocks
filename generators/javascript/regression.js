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
goog.provide('Blockly.JavaScript.regression');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['regression'] = function(block) {
  var dropdown_regression_type = block.getFieldValue('regression_type');
  var value_iterations = Blockly.JavaScript.valueToCode(block, 'iterations', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rate = Blockly.JavaScript.valueToCode(block, 'rate', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lambda = Blockly.JavaScript.valueToCode(block, 'lambda', Blockly.JavaScript.ORDER_ATOMIC);
  value_iterations = parseFloat(value_iterations)?value_iterations:10;
  value_rate = parseFloat(value_rate)?value_rate:0.1;
  value_lambda = parseFloat(value_lambda)?value_lambda:0;
  if(dropdown_regression_type == "LogisticRegression"){
    var threshold = Blockly.JavaScript.valueToCode(block, 'threshold', Blockly.JavaScript.ORDER_ATOMIC);
    threshold = parseFloat(threshold)?threshold:0;
    var logistic_code = 'new ' + dropdown_regression_type +'({ \n \t ' +'alpha:' + value_rate +',\n\t' + 'iterations: '+ value_iterations +
              ',\n\t'+'lambda: '+value_lambda + ',\n\t threshold: '+ threshold + '\n})' ;
    return [logistic_code, Blockly.JavaScript.ORDER_NONE];
  }
  var code = 'new ' + dropdown_regression_type +'({ \n \t ' +'alpha:' + value_rate +',\n\t' + 'iterations: '+ value_iterations +',\n\t'+'lambda: '+value_lambda +'\n})' ;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['regression_train'] = function(block) {
  var value_regression_variable = Blockly.JavaScript.valueToCode(block, 'regression_variable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_train_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_train_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "\n"+ value_regression_variable +'.fit(' + value_train_x +','+ value_train_y + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['regression_test'] = function(block) {
  var value_regression_variable = Blockly.JavaScript.valueToCode(block, 'regression_variable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_test = Blockly.JavaScript.valueToCode(block, 'test', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "\n"+ value_regression_variable +'.transform(' + value_test +')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
