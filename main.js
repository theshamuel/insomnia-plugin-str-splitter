module.exports.templateTags = [{
    name: 'stringSptillter',
    displayName: 'String splitter',
    description: 'String splitter splits a string by delimiter and return the token by requested index',
    args: [
        {
            displayName: 'Input string',
            description: 'A string needs to be splitted up',
            type: 'string',
            defaultValue: ''
        }, 
        {
            displayName: 'Delimiter',
            description: 'A symbol or multiple symbols you need to split the string by',
            type: 'string',
            defaultValue: ''
        },
        {
            displayName: 'Index of token',
            description: 'Index of token from result array',
            type: 'number',
            defaultValue: 0
        }
    ],
    async run (context, inputStr, splitter, index) {
        return inputStr.split(splitter)[index];
    }
}];