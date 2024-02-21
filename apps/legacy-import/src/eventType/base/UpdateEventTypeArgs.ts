/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventTypeWhereUniqueInput } from "./EventTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EventTypeUpdateInput } from "./EventTypeUpdateInput";

@ArgsType()
class UpdateEventTypeArgs {
  @ApiProperty({
    required: true,
    type: () => EventTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventTypeWhereUniqueInput)
  @Field(() => EventTypeWhereUniqueInput, { nullable: false })
  where!: EventTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EventTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => EventTypeUpdateInput)
  @Field(() => EventTypeUpdateInput, { nullable: false })
  data!: EventTypeUpdateInput;
}

export { UpdateEventTypeArgs as UpdateEventTypeArgs };