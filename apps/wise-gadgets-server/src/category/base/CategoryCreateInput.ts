/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { GadgetCreateNestedManyWithoutCategoriesInput } from "./GadgetCreateNestedManyWithoutCategoriesInput";
import { Type } from "class-transformer";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => GadgetCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => GadgetCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => GadgetCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  gadgets?: GadgetCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { CategoryCreateInput as CategoryCreateInput };
