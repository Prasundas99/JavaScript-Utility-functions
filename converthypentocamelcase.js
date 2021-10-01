function camel(str) {
    const camelcs = /-(\w)/g;
    return str.replace(camelcs, (_, c) => c ? c.toUpperCase() : '');
}