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
goog.provide('Blockly.JavaScript.stats');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['stats_construct_pmf'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code =  dropdown_name + '(' + value_name +')';
    return [code , Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['stats_pmf_getters'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_name+'.dictwrapper.'+dropdown_name+'()';
    return [code , Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['stats_pmf_operations'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_name +'.'+dropdown_name+'()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['normal_distribution'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'NAME1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'gaussian(' + value_name1 +' ,'+ value_name2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['normal_distribution_getters'] = function(block) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'NAME1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name3 = Blockly.JavaScript.valueToCode(block, 'NAME3', Blockly.JavaScript.ORDER_ATOMIC);
  var output;
  
  var code = value_name1 + '.evaluate("' + dropdown_name2 + '", ' + value_name3 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALLs];
};