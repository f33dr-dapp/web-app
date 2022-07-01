/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ProfileInterface extends utils.Interface {
  functions: {
    "isValidContract(string)": FunctionFragment;
    "setProfile(address,string,string,string,string,bool,address,uint256)": FunctionFragment;
    "getProfile(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "isValidContract" | "setProfile" | "getProfile"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isValidContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProfile",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getProfile",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setProfile", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getProfile", data: BytesLike): Result;

  events: {};
}

export interface Profile extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProfileInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setProfile(
      _address: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _username: PromiseOrValue<string>,
      _bio: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      _isNft: PromiseOrValue<boolean>,
      _nftContract: PromiseOrValue<string>,
      _nftTokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getProfile(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, string, string, boolean, string, BigNumber] & {
          name: string;
          username: string;
          imageUrl: string;
          bio: string;
          isNft: boolean;
          nftContract: string;
          nftTokenId: BigNumber;
        }
      ]
    >;
  };

  isValidContract(
    _type: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setProfile(
    _address: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _username: PromiseOrValue<string>,
    _bio: PromiseOrValue<string>,
    _imageUrl: PromiseOrValue<string>,
    _isNft: PromiseOrValue<boolean>,
    _nftContract: PromiseOrValue<string>,
    _nftTokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getProfile(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, boolean, string, BigNumber] & {
      name: string;
      username: string;
      imageUrl: string;
      bio: string;
      isNft: boolean;
      nftContract: string;
      nftTokenId: BigNumber;
    }
  >;

  callStatic: {
    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setProfile(
      _address: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _username: PromiseOrValue<string>,
      _bio: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      _isNft: PromiseOrValue<boolean>,
      _nftContract: PromiseOrValue<string>,
      _nftTokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getProfile(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, boolean, string, BigNumber] & {
        name: string;
        username: string;
        imageUrl: string;
        bio: string;
        isNft: boolean;
        nftContract: string;
        nftTokenId: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setProfile(
      _address: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _username: PromiseOrValue<string>,
      _bio: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      _isNft: PromiseOrValue<boolean>,
      _nftContract: PromiseOrValue<string>,
      _nftTokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getProfile(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setProfile(
      _address: PromiseOrValue<string>,
      _name: PromiseOrValue<string>,
      _username: PromiseOrValue<string>,
      _bio: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      _isNft: PromiseOrValue<boolean>,
      _nftContract: PromiseOrValue<string>,
      _nftTokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getProfile(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}