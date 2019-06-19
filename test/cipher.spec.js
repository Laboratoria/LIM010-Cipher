describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "4Ñ" para "4Ñ" con offset 2', () => {
      assert.equal(cipher.encode(2, '4Ñ'), '4Ñ');
    });

    it('debería retornar "..DeF.." para "..AbC.." con offset 3', () => {
      assert.equal(cipher.encode(3,'..AbC..'), '..DeF..');
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "4Ñ" para "4Ñ" con offset 2', () => {
      assert.equal(cipher.decode(2,'4Ñ'), '4Ñ');
    });

    it('debería retornar "..AbC.." para "..DeF.." con offset 3', () => {
      assert.equal(cipher.decode(3,'..DeF..'), '..AbC..');
    });
    
  });

});
