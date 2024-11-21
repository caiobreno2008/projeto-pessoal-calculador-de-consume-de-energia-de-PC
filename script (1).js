// Dados de consumo de energia dos componentes (em watts)
const consumoComponentes = {
  "Intel Core i5": 65,
  "AMD Ryzen 7": 105,
  "NVIDIA RTX 3080": 320,
  "AMD RX 6800": 250,
  "RAM": 5,  // Consumo médio por módulo de RAM
  "SSD": 5,  // Consumo de um SSD
  "HDD": 10  // Consumo de um HDD
}

// Função para exibir o menu e obter a escolha do usuário
function exibirMenu() {
  let menu = `*** CALCULADOR DE CONSUMO DE ENERGIA DE PC ***
  1. Escolher CPU
  2. Escolher GPU
  3. Informar quantidade de RAM
  4. Escolher tipo de armazenamento
  5. Calcular consumo e sugerir fonte de alimentação
  6. Sair`

  return prompt(menu)
}

// Função para calcular o consumo total de energia
function calcularConsumo(cpu, gpu, ram, armazenamento) {
  const consumoTotal = consumoComponentes[cpu] + consumoComponentes[gpu] + (ram * consumoComponentes["RAM"]) + consumoComponentes[armazenamento]
  return consumoTotal
}

// Função para sugerir a potência da fonte de alimentação
function sugerirFonte(consumoTotal) {
  const margemSeguranca = consumoTotal * 1.2
  alert(`Consumo total estimado: ${consumoTotal}W\nFonte de alimentação recomendada: ${margemSeguranca.toFixed(0)}W`)
}

// Função principal que controla a interação com o menu
function executarCalculadora() {
  let cpu = ""
  let gpu = ""
  let ram = 0
  let armazenamento = ""

  // Opções de componentes
  const cpus = ["Intel Core i5", "AMD Ryzen 7"]
  const gpus = ["NVIDIA RTX 3080", "AMD RX 6800"]
  const armazenamentos = ["SSD", "HDD"]

  while (true) {
    let opcao = exibirMenu()

    switch (opcao) {
      case "1":
        // Escolher CPU
        let cpuEscolha = prompt("Escolha a CPU:\n1. Intel Core i5\n2. AMD Ryzen 7")
        if (cpuEscolha == "1") {
          cpu = cpus[0]
        } else if (cpuEscolha == "2") {
          cpu = cpus[1]
        } else {
          alert("Opção inválida para CPU. Tente novamente.")
        }
        break

      case "2":
        // Escolher GPU
        let gpuEscolha = prompt("Escolha a GPU:\n1. NVIDIA RTX 3080\n2. AMD RX 6800")
        if (gpuEscolha == "1") {
          gpu = gpus[0]
        } else if (gpuEscolha == "2") {
          gpu = gpus[1]
        } else {
          alert("Opção inválida para GPU. Tente novamente.")
        }
        break

      case "3":
        // Informar quantidade de RAM
        ram = parseInt(prompt("Quantos módulos de RAM você tem?"))
        if (ram <= 0) {
          alert("Por favor, insira um número válido e maior que 0 para a quantidade de RAM.")
          ram = 0  // Reiniciar a RAM em caso de entrada inválida
        }
        break

      case "4":
        // Escolher tipo de armazenamento
        let armazenamentoEscolha = prompt("Escolha o tipo de armazenamento:\n1. SSD\n2. HDD")
        if (armazenamentoEscolha == "1") {
          armazenamento = armazenamentos[0]
        } else if (armazenamentoEscolha == "2") {
          armazenamento = armazenamentos[1]
        } else {
          alert("Opção inválida para armazenamento. Tente novamente.")
        }
        break

      case "5":
        // Calcular consumo e sugerir a fonte de alimentação
        if (cpu && gpu && ram > 0 && armazenamento) {
          const consumoTotal = calcularConsumo(cpu, gpu, ram, armazenamento)
          sugerirFonte(consumoTotal)
        } else {
          alert("Por favor, preencha todos os campos antes de calcular.")
        }
        break

      case "6":
        alert("Finalizado...")
        return

      default:
        alert("Opção inválida, por favor tente novamente.")
    }
  }
}

// Iniciar a aplicação
executarCalculadora()
