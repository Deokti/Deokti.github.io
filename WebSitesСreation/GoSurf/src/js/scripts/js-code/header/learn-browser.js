function learnWhichBrowserOpen() {
  const browser = navigator.appVersion;
  const unknownBrowser = 'AnotherBrowser';

  const Firefox = '5.0 (Windows)';
  const Chrome = '5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36';
  const Opera = '5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 OPR/68.0.3618.125';
  const IE11 = '5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; Media Center PC 6.0; rv:11.0) like Gecko';

  if (browser === Firefox) return 'Firefox';
  if (browser === Chrome) return 'Chrome';
  if (browser === Opera) return 'Opera';
  if (browser === IE11) return 'IE11';

  return unknownBrowser;
}


export default learnWhichBrowserOpen;
