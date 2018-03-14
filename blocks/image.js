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
 * @fileoverview Image blocks for Milo (github.com/4and4/MiloServer).
 *
 *
 * @author Arjun Rao, Ayush Bihani
 */

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.defineBlocksWithJsonArray([{
  "type": "img_from_webcam",
  "message0": "Image From WebCam",
  "colour": "%{BKY_IMAGE_HUE}",
  "helpUrl": "",
  "output": "ImgDiv",
  "tooltip": "Gets image from WebCam",
  // "previousStatement": true,
  // "nextStatement": true,
  "extensions": ["parent_tooltip_when_inline"]
},
{
  "type": "img_from_url",
  "message0": "Image From URL %1",
  "args0": [{
    type: "input_value",
    name: "TEXT",
    check: "String"
  }],
  "colour": "%{BKY_IMAGE_HUE}",
  "helpUrl": "",
  "output": "ImgDiv",
  "tooltip": "Gets image from URL",
  // "previousStatement": true,
  // "nextStatement": true,
  "extensions": ["parent_tooltip_when_inline"]
},
{
  "type": "img_show",
  "message0": "Show %1",
  "args0": [{
    "type": "input_value",
    "name": "IMG",
    "check": "ImgDiv"
  }],
  "colour": "%{BKY_IMAGE_HUE}",
  "helpUrl": "",
  "previousStatement": true,
  "nextStatement": true,
  "tooltip": "Labels image using squeezenet Model",
  "extensions": ["parent_tooltip_when_inline"]
},
{
  "type": "squeezenet_label",
  "message0": "Using SqueezeNet",
  "message1": "Classify %1",
  "args1": [{
    "type": "input_value",
    "name": "IMG",
    "check": "ImgDiv"
  }],
  "colour": "%{BKY_ML_HUE}",
  "helpUrl": "",
  "previousStatement": true,
  "nextStatement": true,
  "tooltip": "Labels image using squeezenet Model",
  "extensions": ["parent_tooltip_when_inline"]
}]);
