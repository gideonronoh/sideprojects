import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GadgetServiceBase } from "./base/gadget.service.base";

@Injectable()
export class GadgetService extends GadgetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
