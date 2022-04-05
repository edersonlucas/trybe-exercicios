const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Exercicio 1

const customerInfo = (order) => {
  const comprador = order.name
  const entregador = order.order.delivery.deliveryPerson
  const telefone = order.phoneNumber
  const rua = order.address.street
  const numero = order.address.number
  const ap = order.address.apartment
  console.log(`Olá ${entregador}, entrega para: ${comprador}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${ap}`);
}

customerInfo(order);

// Exercicio 2

const orderModifier = (order) => {
  order.name = 'Luiza Silva'
  order.payment.total = 50
  const comprador = order.name
  const total = order.payment.total
  console.log(`Olá ${comprador}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}.`);
}

orderModifier(order);