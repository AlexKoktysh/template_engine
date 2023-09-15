import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { User as UserModel } from "@prisma/client";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("")
    async getPublishedPosts(): Promise<UserModel[]> {
        return this.userService.user();
    }

    @Post("")
    async signupUser(
        @Body() userData: { name?: string; email: string },
    ): Promise<UserModel> {
        return this.userService.createUser(userData);
    }
}
