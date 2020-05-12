# -*- coding: utf-8 -*-
#
# addon_template v20.5.4i8
#
# Copyright: trgk (phu54321@naver.com)
# License: GNU AGPL, version 3 or later;
# See http://www.gnu.org/licenses/agpl.html

from aqt.editor import Editor
from anki.hooks import wrap

from .utils.JSEval import execJSFile
import os
import json


def onLoadNote(self, focusTo=None):
    execJSFile(self.web, "js/main.min.js")


Editor.loadNote = wrap(Editor.loadNote, onLoadNote, "after")
