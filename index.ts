import { plainToInstance } from 'class-transformer';
import { IsString, validate } from 'class-validator';

class Test {
  @IsString()
  private name: string;

  foo() {
    return this.name;
  }
}

const test = plainToInstance(Test, { name: null });
const doValidate = async () => {
  const test1 = plainToInstance(Test, { name: null });
  const errors = await validate(test1);
  console.log(errors);
};

console.log(test.foo());
doValidate();
