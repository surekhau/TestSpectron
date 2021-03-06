const Application = require('spectron').Application;
const assert = require('assert');
//const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

describe('Application launch', function () {
  this.timeout(100000)

  beforeEach(function () {
    this.app = new Application({
 
      path: '\\SpectronTest\\TestSpectron\\apps\\Granite Desktop Setup 1.1.13.exe',
      //args: [path.join(__dirname, '..')]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
      // Please note that getWindowCount() will return 2 if `dev tools` are opened.
      // assert.equal(count, 2)
    })
  })
})