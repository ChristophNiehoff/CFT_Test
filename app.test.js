// app.test.js
describe('Hello World Test', () => {
  it('prints a secret in base64', () => {
    const secret = process.env.MY_SECRET; // MY_SECRET is your GitLab CI/CD variable
    const encodedSecret = Buffer.from(secret, 'utf-8').toString('base64');
    console.log(`Encoded secret: ${encodedSecret}`);
    expect(true).toBe(true); // This is just a placeholder test
  });
});
