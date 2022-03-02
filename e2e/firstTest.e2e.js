describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should check if register a new skill', async () => {
    const inputSkill = await element(by.id('input-new'));
    const buttonAdd = await element(by.id('button-add'));
    const flatListSkills = await element(by.id('flatlist-skills'));

    await inputSkill.tap();
    await inputSkill.typeText('React Native');
    await buttonAdd.tap();
    
    await flatListSkills.tap();

    expect(element(by.id('flatlist-skills'))).toBeVisible();
  });
});
