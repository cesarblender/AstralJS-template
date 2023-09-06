import {
  Server,
  type ServerSettings,
  type ControllerClass,
} from "@astralstack/astraljs";

import { controllers } from "./router/controllers";

class MyServer extends Server {
  // Rest API settings
  public getSettings(): Partial<ServerSettings> {
    return {
      apiDocumentation: true,
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
