/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        type: "string",
      },
      {
        name: "_decimals",
        type: "uint8",
      },
      {
        name: "_addressBook",
        type: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_type",
        type: "string",
      },
    ],
    name: "isValidContract",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x602061084b600039600051602060208261084b01600039600051116108465760208161084b01600039600051806040526020820160208161084b01600039600051606052505050602061086b600039600051600460208261084b01600039600051116108465760208161084b01600039600051806080526020820160208161084b0160003960005160a052505050602061088b6000396000518060081c6108465760c05260206108ab6000396000518060a01c6108465760e05260405180600355606051600455506080518060055560a0516006555060c05160075560e0516300000748526107486100fd6300000000396107486020016300000000f3600436101561000d5761073d565b60003560e01c346107435763a9059cbb811861011f576004358060a01c6107435760405260006024351161009857601c6060527f56616c7565206d7573742062652067726561746572207468616e2030000000006080526060506060518060800181600003601f1636823750506308c379a06020526020604052601f19601f6060510116604401603cfd5b60013360205260005260406000208054602435808210610743578082039050905081555060016040516020526000526040600020805460243581818301106107435780820190509050815550604051337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60243560605260206060a3600160605260206060f35b6323b872dd811861026d576004358060a01c610743576040526024358060a01c610743576060526000604435116101ad57601c6080527f56616c7565206d7573742062652067726561746572207468616e20300000000060a0526080506080518060a00181600003601f1636823750506308c379a06040526020606052601f19601f6080510116604401605cfd5b60026040516020526000526040600020803360205260005260406000209050805460443580821061074357808203905090508155506001604051602052600052604060002080546044358082106107435780820390509050815550600160605160205260005260406000208054604435818183011061074357808201905090508155506060516040517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60443560805260206080a3600160805260206080f35b63095ea7b381186102e4576004358060a01c610743576040526024356002336020526000526040600020806040516020526000526040600020905055604051337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560243560605260206060a3600160605260206060f35b6340c10f19811861042f576004358060a01c6107435760405263ccf1454a60a05260208060c05260066060527f4d696e746572000000000000000000000000000000000000000000000000000060805260608160c0018151808252602083016020830181518152505050805180602083010181600003601f163682375050601f19601f825160200101169050905081015050602060a0606460bc60206107486000396000515afa61039a573d600060003e3d6000fd5b60203d106107435760a0518060a01c610743576101205261012051331861074357600054602435818183011061074357808201905090506000556001604051602052600052604060002080546024358181830110610743578082019050905081555060405160007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60243560605260206060a3005b639dc29fac8118610576576004358060a01c6107435760405263ccf1454a60a05260208060c05260066060527f4d696e746572000000000000000000000000000000000000000000000000000060805260608160c0018151808252602083016020830181518152505050805180602083010181600003601f163682375050601f19601f825160200101169050905081015050602060a0606460bc60206107486000396000515afa6104e5573d600060003e3d6000fd5b60203d106107435760a0518060a01c6107435761012052610120513318610743576001604051602052600052604060002080546024358082106107435780820390509050815550600054602435808210610743578082039050905060005560006040517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60243560605260206060a3005b63a7a66fa681186105e857600435600401600c81351161074357803580604052602082018035606052505050600560c0527f546f6b656e00000000000000000000000000000000000000000000000000000060e05260c080516020820120905060405160602014610100526020610100f35b6318160ddd81186105ff5760005460405260206040f35b6370a082318118610632576004358060a01c61074357604052600160405160205260005260406000205460605260206060f35b63dd62ed3e8118610684576004358060a01c610743576040526024358060a01c610743576060526002604051602052600052604060002080606051602052600052604060002090505460805260206080f35b6306fdde0381186106d457602080604052806040016003548082526020820160045481525050805180602083010181600003601f163682375050601f19601f825160200101169050810190506040f35b6395d89b41811861072457602080604052806040016005548082526020820160065481525050805180602083010181600003601f163682375050601f19601f825160200101169050810190506040f35b63313ce567811861073b5760075460405260206040f35b505b60006000fd5b600080fd005b600080fd";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _addressBook: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _addressBook,
      overrides || {}
    ) as Promise<Token>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _addressBook: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _addressBook,
      overrides || {}
    );
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}