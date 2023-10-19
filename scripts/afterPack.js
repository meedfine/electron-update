const path = require('path')
const AdmZip = require('adm-zip')

/**
 * @param {import('electron-builder').AfterPackContext} context
 */
exports.default = function (context) {
  var unpackedDir = path.join(context.appOutDir, './resources/app.asar.unpacked')
  var zip = new AdmZip()
  zip.addLocalFolder(unpackedDir)
  zip.writeZip(path.join(context.outDir, 'unpacked.zip'))
}
