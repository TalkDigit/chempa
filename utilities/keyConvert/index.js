const keyConvert = (e) => {
    const characters = {
        'ı': 'i',
        'İ': 'i',
        'ş': 's',
        'Ş': 's',
        'ğ': 'g',
        'Ğ': 'g',
        'ü': 'u',
        'Ü': 'u',
        'ö': 'o',
        'Ö': 'o',
        'ç': 'c',
        'Ç': 'c',
        ' ': '-',
        '_': '-',
        ',': '',
        '.': '',
        ';': '',
        ':': '',
        '!': '',
        '?': '',
        '"': '',
        "'": '',
        '<': '',
        '>': '',
        '|': '',
        '+': '',
        '=': '',
        '&': '',
        '@': '',
        '#': '',
        '$': '',
        '%': '',
        '^': '',
        '*': '',
        '(': '',
        ')': '',
        '[': '',
        ']': '',
        '{': '',
        '}': '',
        '~': '',
        '`': '',
        '\\': '',
        '/': '',
      };
      function ilkHarfiBuyut(metin) {
        return metin.charAt(0).toUpperCase() + metin.slice(1);
    }
      return ilkHarfiBuyut(e
        .toString()
        .toLowerCase()
        .replace(/[^\w\s]/g, (char) => characters[char] || '')
        .replace(/\s+/g, '-')        
        .replace(/-+/g, '-')
        .replace(/^-+/, '')          
        .replace(/-+$/, ''));

        
}

export default keyConvert