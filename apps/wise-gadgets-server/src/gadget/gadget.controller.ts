import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GadgetService } from "./gadget.service";
import { GadgetControllerBase } from "./base/gadget.controller.base";

@swagger.ApiTags("gadgets")
@common.Controller("gadgets")
export class GadgetController extends GadgetControllerBase {
  constructor(
    protected readonly service: GadgetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
