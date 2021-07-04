/*
 * @Author: 吴灏
 * @Date: 2021-04-25 13:53:42
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-04-25 14:34:41
 * @Description: file content
 */
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 100,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',

      options: {
        parser: 'json',
      },
    },
  ],
}
