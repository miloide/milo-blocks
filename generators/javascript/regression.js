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

Blockly.JavaScript['linear_regression'] = function(block) {
  var value_alpha = Blockly.JavaScript.valueToCode(block, 'alpha', Blockly.JavaScript.ORDER_ATOMIC);
  var value_iterations = Blockly.JavaScript.valueToCode(block, 'iterations', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lambda = Blockly.JavaScript.valueToCode(block, 'lambda', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new LinearRegression({ \n \t ' +'alpha:' + value_alpha +',\n\t' + 'iterations: '+ value_iterations +',\n\t'+'lambda: '+value_lambda +'\n})' ;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linear_regression_train'] = function(block) {
  var value_regression_variable = Blockly.JavaScript.valueToCode(block, 'regression_variable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_train = Blockly.JavaScript.valueToCode(block, 'train', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "\n"+ value_regression_variable +'.fit(' + value_train +')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['linear_regression_test'] = function(block) {
  var value_regression_variable = Blockly.JavaScript.valueToCode(block, 'regression_variable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_test = Blockly.JavaScript.valueToCode(block, 'test', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "\n"+ value_regression_variable +'.transform(' + value_test +')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};