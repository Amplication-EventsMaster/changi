import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TerminalModuleBase } from "./base/terminal.module.base";
import { TerminalService } from "./terminal.service";
import { TerminalController } from "./terminal.controller";
import { TerminalResolver } from "./terminal.resolver";

@Module({
  imports: [TerminalModuleBase, forwardRef(() => AuthModule)],
  controllers: [TerminalController],
  providers: [TerminalService, TerminalResolver],
  exports: [TerminalService],
})
export class TerminalModule {}
