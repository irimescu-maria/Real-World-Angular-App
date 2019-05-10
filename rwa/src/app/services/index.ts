import { AuthenticationService } from "./authentication.service";
import { AuthGuard } from "./auth-guard";
import { CategoryService } from "./category.service";
import { QuestionService } from "./question.service";
import { TagService } from "./tag.service";

export {
    AuthenticationService,
    AuthGuard,
    CategoryService,
    TagService,
    QuestionService
};

export default [
    AuthenticationService,
    AuthGuard,
    CategoryService,
    QuestionService,
    TagService
];