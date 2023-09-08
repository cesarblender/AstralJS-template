import {
  Server,
  type ServerSettings,
  type ControllerClass,
  getEnv,
  JWTDuration,
  TimeUnits,
} from "@astralstack/astraljs";

import { controllers } from "./router/controllers";

class MyServer extends Server {
  // Rest API settings
  public getSettings(): Partial<ServerSettings> {
    return {
      apiDocumentation: true,
      jwt: {
        secret: {
          access: getEnv("REPLACE_WITH_YOUR_JWT_ACCESS_SECRET", "access_secret"),
          refresh: getEnv("REPLACE_WITH_YOUR_JWT_REFRESH_SECRET", "refresh_secret")
        },
        duration: {
          access: JWTDuration(10, TimeUnits.minutes),
          refresh: JWTDuration(30, TimeUnits.days)
        },
        algorithm: 'HS256'
      }, // JWT Config
    };
  }

  // Controllers registration
  public controllers: ControllerClass[] = controllers;

  constructor() {
    super();

    // Initialize app router
    this.implementRouter();
  }
}

// Run the server
new MyServer().bootstrap();
