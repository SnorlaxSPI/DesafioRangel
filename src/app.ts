var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var result = textWrap(text, 100, "<br/>\n");
console.log(result);

function textWrap(text: string, length: number, spaceReplacer: string): any {
    if (text.length>length) {
        var p=length
        for (;p>0 && text[p]!=' ';p--) {
        }
        if (p>0) {
            var left = text.substring(0, p);
            var right = text.substring(p+1);
            return left + spaceReplacer + textWrap(right, length, spaceReplacer);
        }
    }
    return text;
}