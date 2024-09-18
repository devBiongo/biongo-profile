class Logger {
  public info(message: string) {
    console.log(message);
  }
}

export const logger = new Logger();
