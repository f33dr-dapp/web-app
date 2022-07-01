/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Profile, ProfileInterface } from "../Profile";

const _abi = [
  {
    inputs: [
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
    inputs: [
      {
        name: "_address",
        type: "address",
      },
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_username",
        type: "string",
      },
      {
        name: "_bio",
        type: "string",
      },
      {
        name: "_imageUrl",
        type: "string",
      },
      {
        name: "_isNft",
        type: "bool",
      },
      {
        name: "_nftContract",
        type: "address",
      },
      {
        name: "_nftTokenId",
        type: "uint256",
      },
    ],
    name: "setProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_address",
        type: "address",
      },
    ],
    name: "getProfile",
    outputs: [
      {
        components: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "username",
            type: "string",
          },
          {
            name: "imageUrl",
            type: "string",
          },
          {
            name: "bio",
            type: "string",
          },
          {
            name: "isNft",
            type: "bool",
          },
          {
            name: "nftContract",
            type: "address",
          },
          {
            name: "nftTokenId",
            type: "uint256",
          },
        ],
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60206109796000396000518060a01c61097457604052604051630000093c5261093c61003763000000003961093c6020016300000000f3600436101561000d57610931565b60003560e01c346109375763a7a66fa6811861008a57600435600401600c81351161093757803580604052602082018035606052505050600760c0527f50726f66696c650000000000000000000000000000000000000000000000000060e05260c080516020820120905060405160602014610100526020610100f35b63d01dccb08118610682576004358060a01c6109375760405260243560040160208135116109375780358060605260208201803560805250505060443560040160208135116109375780358060a05260208201803560c0525050506064356004016101008135116109375780358060e0526020820181816101003750505060843560040161010081351161093757803580610200526020820181816102203750505060a4358060011c610937576103205260c4358060a01c610937576103405263ccf1454a6103a0526020806103c0526006610360527f4d696e746572000000000000000000000000000000000000000000000000000061038052610360816103c0018151808252602083016020830181518152505050805180602083010181600003601f163682375050601f19601f82516020010116905090508101505060206103a060646103bc602061093c6000396000515afa6101ef573d600060003e3d6000fd5b60203d10610937576103a0518060a01c61093757610420526104205133186109375760006103805261038080516020820120905060a05160c02014156102955760186103a0527f557365726e616d652063616e6e6f7420626520656d70747900000000000000006103c0526103a0506103a051806103c00181600003601f1636823750506308c379a061036052602061038052601f19601f6103a051011660440161037cfd5b60006103805261038080516020820120905060605160802014156103195760146103a0527f4e616d652063616e6e6f7420626520656d7074790000000000000000000000006103c0526103a0506103a051806103c00181600003601f1636823750506308c379a061036052602061038052601f19601f6103a051011660440161037cfd5b600160a05160c02060205260005260406000205461036052604051610360511861034457600161034a565b61036051155b6103b4576017610380527f557365726e616d6520616c726561647920696e207573650000000000000000006103a0526103805061038051806103a00181600003601f1636823750506308c379a061034052602061036052601f19601f61038051011660440161035cfd5b610320511561047e576103405161038052604051636352211e6103a05260e4356103c05260206103a060246103bc610380515afa6103f7573d600060003e3d6000fd5b60203d10610937576103a0518060a01c610937576103e0526103e0511461047e576017610400527f546f6b656e206e6f74206f776e65642062792075736572000000000000000000610420526104005061040051806104200181600003601f1636823750506308c379a06103c05260206103e052601f19601f6104005101166044016103dcfd5b60006040516020526000526040600020805480610380526001820180546103a0525050600281018054806103c0526001820180546103e0525050506004810180548061040052600182016000602083601f0104600881116109375780156104f957905b808301546020820261042001526001018181186104e1575b5050505050600d810180548061052052600182016000602083601f01046008811161093757801561053e57905b80830154602082026105400152600101818118610526575b50505050506016810154610640526017810154610660526018810154610680525060006040516020526000526040600020606051808255600182016080518155505060a0518060028301556001600283010160c0518155505061020051806004830155600160048301016000602083601f0104600881116109375780156105d957905b602081026102200151818401556001018181186105c1575b5050505060e05180600d8301556001600d8301016000602083601f01046008811161093757801561061e57905b60208102610100015181840155600101818118610606575b5050505061032051601682015561034051601782015560e43560188201555060a05160c0206103c0516103e0201461068057600060016103c0516103e020602052600052604060002055604051600160a05160c0206020526000526040600020555b005b630f53a470811861092f576004358060a01c610937576040526000604051602052600052604060002080548060605260018201805460805250506002810180548060a05260018201805460c0525050506004810180548060e052600182016000602083601f01046008811161093757801561071157905b808301546020820261010001526001018181186106f9575b5050505050600d810180548061020052600182016000602083601f01046008811161093757801561075657905b8083015460208202610220015260010181811861073e575b50505050506016810154610320526017810154610340526018810154610360525061032051156107ef576103405161038052604051636352211e6103a052610360516103c05260206103a060246103bc610380515afa6107bb573d600060003e3d6000fd5b60203d10610937576103a0518060a01c610937576103e0526103e051146107ef576000610360526000610340526000610320525b60208061038052806103800160e08082528082016060518082526020820160805181525050805180602083010181600003601f163682375050601f19601f8251602001011690508101905080602083015280820160a0518082526020820160c05181525050805180602083010181600003601f163682375050601f19601f8251602001011690508101905080604083015280820160e0518082526020820181818361010060045afa90505050805180602083010181600003601f163682375050601f19601f82516020010116905081019050806060830152808201610200518082526020820181818361022060045afa90505050805180602083010181600003601f163682375050601f19601f825160200101169050810190506103205160808301526103405160a08301526103605160c0830152905081019050610380f35b505b60006000fd5b600080fd005b600080fd";

type ProfileConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProfileConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Profile__factory extends ContractFactory {
  constructor(...args: ProfileConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _addressBook: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Profile> {
    return super.deploy(_addressBook, overrides || {}) as Promise<Profile>;
  }
  override getDeployTransaction(
    _addressBook: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_addressBook, overrides || {});
  }
  override attach(address: string): Profile {
    return super.attach(address) as Profile;
  }
  override connect(signer: Signer): Profile__factory {
    return super.connect(signer) as Profile__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProfileInterface {
    return new utils.Interface(_abi) as ProfileInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Profile {
    return new Contract(address, _abi, signerOrProvider) as Profile;
  }
}
