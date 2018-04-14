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
