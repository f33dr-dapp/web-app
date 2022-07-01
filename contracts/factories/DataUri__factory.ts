/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DataUri, DataUriInterface } from "../DataUri";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "base64",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_type",
        type: "string",
      },
    ],
    name: "isValidContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_json",
        type: "string",
      },
    ],
    name: "toDataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061056a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063a7a66fa614610046578063d2ef6adc1461006e578063daa68c211461008e575b600080fd5b61005961005436600461035f565b6100a1565b60405190151581526020015b60405180910390f35b61008161007c36600461035f565b61011d565b604051610065919061040e565b61008161009c36600461035f565b610173565b600080604051806040016040528060078152602001664461746155726960c81b8152509050826040516020016100d791906103ad565b60405160208183030381529060405280519060200120816040516020016100fe91906103ad565b6040516020818303038152906040528051906020012014915050919050565b606060008260405160200161013291906103ad565b604051602081830303815290604052905061014c81610173565b60405160200161015c91906103c9565b604051602081830303815290604052915050919050565b606081516000141561019357505060408051602081019091526000815290565b60006040518060600160405280604081526020016104f560409139905060006003845160026101c29190610441565b6101cc9190610459565b6101d7906004610479565b905060006101e6826020610441565b67ffffffffffffffff81111561020c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610236576020820181803683370190505b509050818152600183018586518101602084015b818310156102a45760039283018051603f601282901c811687015160f890811b8552600c83901c8216880151811b6001860152600683901c8216880151811b60028601529116860151901b9382019390935260040161024a565b6003895106600181146102be57600281146102cf576102db565b613d3d60f01b6001198301526102db565b603d60f81b6000198301525b509398975050505050505050565b600067ffffffffffffffff80841115610304576103046104de565b604051601f8501601f19908116603f0116810190828211818310171561032c5761032c6104de565b8160405280935085815286868601111561034557600080fd5b858560208301376000602087830101525050509392505050565b600060208284031215610370578081fd5b813567ffffffffffffffff811115610386578182fd5b8201601f81018413610396578182fd5b6103a5848235602084016102e9565b949350505050565b600082516103bf818460208701610498565b9190910192915050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161040181601d850160208701610498565b91909101601d0192915050565b602081526000825180602084015261042d816040850160208701610498565b601f01601f19169190910160400192915050565b60008219821115610454576104546104c8565b500190565b60008261047457634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610493576104936104c8565b500290565b60005b838110156104b357818101518382015260200161049b565b838111156104c2576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122086f9c4fe56599c87b50d725329e70edfec2ea5002fd2644c49415b94b93dc1a264736f6c63430008040033";

type DataUriConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DataUriConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DataUri__factory extends ContractFactory {
  constructor(...args: DataUriConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DataUri> {
    return super.deploy(overrides || {}) as Promise<DataUri>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DataUri {
    return super.attach(address) as DataUri;
  }
  override connect(signer: Signer): DataUri__factory {
    return super.connect(signer) as DataUri__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataUriInterface {
    return new utils.Interface(_abi) as DataUriInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataUri {
    return new Contract(address, _abi, signerOrProvider) as DataUri;
  }
}
