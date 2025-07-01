class Exception {

  static ReceiveEx(message:string):void
  {
    console.log(`received exception: ${message}`);
  }

}

export { Exception }