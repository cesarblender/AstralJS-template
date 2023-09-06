import { Controller, Get, type HandlerData } from "@astralstack/astraljs";

import { IndexData } from "../data/index.data";

@Controller("/")
export class IndexController {

  @Get("/")
  public indexRoute(): HandlerData {
    return {
      data: IndexData.getHelloWorld(),
      status: 200,
    };
  }
}
