import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TerminalServiceBase } from "./base/terminal.service.base";

@Injectable()
export class TerminalService extends TerminalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
