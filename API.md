<a name="isUnicode"></a>

## isUnicode
Minimal, RFC 6749, compliant unicode validator.

**Kind**: global constant  
**See**: https://datatracker.ietf.org/doc/html/rfc6749#appendix-A  

* [isUnicode](#isUnicode)
    * [.nchar()](#isUnicode.nchar) ⇒ <code>boolean</code>
    * [.nqchar()](#isUnicode.nqchar) ⇒ <code>boolean</code>
    * [.nqschar()](#isUnicode.nqschar) ⇒ <code>boolean</code>
    * [.uchar()](#isUnicode.uchar) ⇒ <code>boolean</code>
    * [.uri()](#isUnicode.uri) ⇒ <code>boolean</code>
    * [.vschar()](#isUnicode.vschar) ⇒ <code>boolean</code>

<a name="isUnicode.nchar"></a>

### isUnicode.nchar() ⇒ <code>boolean</code>
Validate if a value matches a unicode character.

**Kind**: static method of [<code>isUnicode</code>](#isUnicode)  
**Returns**: <code>boolean</code> - true, if valid, otherwise false  
**Value**: <code>string</code> the value to be validated  
**See**: https://tools.ietf.org/html/rfc6749#appendix-A  
<a name="isUnicode.nqchar"></a>

### isUnicode.nqchar() ⇒ <code>boolean</code>
Validate if a value matches a unicode character, including exclamation marks.

**Kind**: static method of [<code>isUnicode</code>](#isUnicode)  
**Returns**: <code>boolean</code> - true, if valid, otherwise false  
**Value**: <code>string</code> the value to be validated  
**See**: https://tools.ietf.org/html/rfc6749#appendix-A  
<a name="isUnicode.nqschar"></a>

### isUnicode.nqschar() ⇒ <code>boolean</code>
Validate if a value matches a unicode character, including exclamation marks and spaces.

**Kind**: static method of [<code>isUnicode</code>](#isUnicode)  
**Returns**: <code>boolean</code> - true, if valid, otherwise false  
**Value**: <code>string</code> the value to be validated  
**See**: https://tools.ietf.org/html/rfc6749#appendix-A  
<a name="isUnicode.uchar"></a>

### isUnicode.uchar() ⇒ <code>boolean</code>
Validate if a value matches a unicode character excluding the carriage
return and linefeed characters.

**Kind**: static method of [<code>isUnicode</code>](#isUnicode)  
**Returns**: <code>boolean</code> - true, if valid, otherwise false  
**Value**: <code>string</code> the value to be validated  
**See**: https://tools.ietf.org/html/rfc6749#appendix-A  
<a name="isUnicode.uri"></a>

### isUnicode.uri() ⇒ <code>boolean</code>
Validate if a value matches generic URIs.

**Kind**: static method of [<code>isUnicode</code>](#isUnicode)  
**Returns**: <code>boolean</code> - true, if valid, otherwise false  
**Value**: <code>string</code> the value to be validated  
**See**: http://tools.ietf.org/html/rfc3986#section-3  
<a name="isUnicode.vschar"></a>

### isUnicode.vschar() ⇒ <code>boolean</code>
Validate if a value matches against the printable set of unicode characters.

**Kind**: static method of [<code>isUnicode</code>](#isUnicode)  
**Returns**: <code>boolean</code> - true, if valid, otherwise false  
**Value**: <code>string</code> the value to be validated  
**See**: https://tools.ietf.org/html/rfc6749#appendix-A  
