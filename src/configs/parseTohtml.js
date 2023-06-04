const parseToHtml = ( str ) => {
    let html = '';

    for ( let i = 0; i < str.length; i++ ) {
        const char = str[ i ];

        switch ( char ) {
            case '<':
                html += '&lt;';
                break;
            case '>':
                html += '&gt;';
                break;
            case '&':
                html += '&amp;';
                break;
            case '"':
                html += '&quot;';
                break;
            case '\'':
                html += '&#39;';
                break;
            default:
                html += char;
                break;
        }
    }

    return html;
};
export default parseToHtml;
