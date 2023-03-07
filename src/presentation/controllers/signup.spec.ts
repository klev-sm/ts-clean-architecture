import { SignUpController } from './signup';

describe('SignUp Controller', () => {
  it('Should return 400 if no name is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'email@email.com',
        password: 'password@password.com',
        confirmPassword: 'password@password.com',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing Param: name'));
  });

  it('Should return 400 if no email is provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'name',
        password: 'password@password.com',
        confirmPassword: 'password@password.com',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing Param: email'));
  });
});
