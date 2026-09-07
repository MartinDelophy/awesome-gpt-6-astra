try {
  await import('./game.js?v=2');
  document.querySelector('#loadingScreen').hidden=true;
} catch(error) {
  document.querySelector('#loadingScreen').hidden=true;
  document.querySelector('#runtimeError').hidden=false;
  console.error('APEX CLUB startup failed:',error);
}
