def cria_conta(numero,nome,saldo,limite):
    conta = {'numero': numero, 'nome':nome, 'saldo':saldo, 'limite':limite}
    return conta

def deposita(conta, valor):
    conta['saldo'] += valor
    
def saca(conta, valor):
    conta['saldo'] -= valor

def extrato(conta):
    print(conta['saldo'])
    