
const service = require("./services");

describe('Exercicio 1 - Testa a função "gerarNumeroAletorio"', () => {
  it('testa a se ao ser chamada a função retorna o número "10"', () => {
    service.randomNumberGenerator = jest.spyOn(service, 'randomNumberGenerator').mockImplementation(() => 10);
    expect(service.randomNumberGenerator()).toBe(10);
    expect(service.randomNumberGenerator).toBeCalled();
    expect(service.randomNumberGenerator).toBeCalledTimes(1);
  });
  it("testa se o numero gerado está no intervalo entre 0 e 100", () => {
    service.randomNumberGenerator.mockRestore();
    const generatedNumber = service.randomNumberGenerator();
    const validatesIfTheNumberIsInTheRange = () => {
      return generatedNumber >= 0 && generatedNumber <= 100
    };
    expect(validatesIfTheNumberIsInTheRange()).toBe(true);
  });
});

describe("Exercicio 2", () => {
  it("Testa nova implementação da função que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez", () => {
    const numberDivision = (number1, number2) => {
      return number1 / number2;
    };
    service.randomNumberGenerator = jest.fn().mockImplementation(numberDivision);
    expect(service.randomNumberGenerator(4, 2)).toBe(2);
    expect(service.randomNumberGenerator).toBeCalled();
    expect(service.randomNumberGenerator).toBeCalledTimes(1);
  });
});

describe("Exercicio 3", () => {
  it('Testa nova implementação da função que deve receber três parâmetros e retorna a multiplicação dos parametros', () => {
    const multiplicationOfNumbers = (number1, number2, number3) => {
      return number1 * number2 * number3;
    };
    service.randomNumberGenerator = jest.fn().mockImplementation(multiplicationOfNumbers);
    expect(service.randomNumberGenerator(4, 2, 2)).toBe(16);
    expect(service.randomNumberGenerator).toBeCalled();
    expect(service.randomNumberGenerator).toBeCalledTimes(1);
  })
  it('Testa nova implementação da função que deve receber um parâmetro e retornar o dobro', () => {
    const doubleTheNumber = (number1) => {
      return number1 * 2;
    };
    service.randomNumberGenerator = jest.fn().mockImplementation(doubleTheNumber);
    expect(service.randomNumberGenerator(16)).toBe(32);
    expect(service.randomNumberGenerator).toBeCalled();
    expect(service.randomNumberGenerator).toBeCalledTimes(1);
  })
});

describe('Exercicio 4', () => {
  it('Testa nova implementação da função "uppercaseWord" ele deve retornar a string em caixa baixa', () => {
    service.uppercaseWord = jest.spyOn(service, 'uppercaseWord').mockImplementation((word) => word.toLowerCase());
    expect(service.uppercaseWord('OLA')).toBe('ola')
    expect(service.uppercaseWord('MARAVILHOSO')).toBe('maravilhoso')
  })
  it('Testa nova implementação da função "theFirstLetterOfTheWord" ele deve retornar a ultima letra da palavra', () => {
    mockTheFirstLetterOfTheWord = jest.spyOn(service, 'theFirstLetterOfTheWord').mockImplementation((word) => word[word.length - 1])
    expect(mockTheFirstLetterOfTheWord('trybe')).toBe('e')
    expect(mockTheFirstLetterOfTheWord('ederson')).toBe('n')
  })
  it('Testa nova implementação da função "concatenateTwoWords" ele receber 3 palavras e concatená-las', () => {
    mockConcatenateTwoWords = jest.spyOn(service, 'concatenateTwoWords').mockImplementation((word1, word2, word3) => word1 + word2 + word3)
    expect(mockConcatenateTwoWords('ola','trybe','vqv')).toBe('olatrybevqv')
    expect(mockConcatenateTwoWords('ederson','lucas','ok')).toBe('edersonlucasok')
  })
  it('Testa se a função "uppercaseWord" foi restaurada.', () => {
    service.uppercaseWord.mockRestore();
    expect(service.uppercaseWord('ola')).toBe('OLA')
    expect(service.uppercaseWord('maravilhoso')).toBe('MARAVILHOSO')
  })
})

describe("testando a requisição a api", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testa requisição resolvida", async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testa requisição rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});
