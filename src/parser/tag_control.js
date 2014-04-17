// Copyright 2014 DeNA Co., Ltd.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


var TagEnd = function(binary, pos, length, type) {
};
TagEnd.prototype.type = TagDefine.TypeTagEnd;

var TagSetBackgroundColor = function(binary, pos, length, type, delayEval, dataStore) {
	setProperty(this, "color", function() {
		return getRGB(binary, pos);
	}, delayEval);
};
TagSetBackgroundColor.prototype.type = TagDefine.TypeTagSetBackgroundColor;

var TagFrameLabel = function(binary, pos, length, type, delayEval, dataStore) {
	setProperty(this, "name", function() {
		return getString(binary, pos);
	}, delayEval);
};
TagFrameLabel.prototype.type = TagDefine.TypeTagFrameLabel;

