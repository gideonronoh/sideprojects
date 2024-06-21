import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GadgetModuleBase } from "./base/gadget.module.base";
import { GadgetService } from "./gadget.service";
import { GadgetController } from "./gadget.controller";
import { GadgetResolver } from "./gadget.resolver";

@Module({
  imports: [GadgetModuleBase, forwardRef(() => AuthModule)],
  controllers: [GadgetController],
  providers: [GadgetService, GadgetResolver],
  exports: [GadgetService],
})
export class GadgetModule {}
