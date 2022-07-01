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

export interface LikesInterface extends utils.Interface {
  functions: {
    "like(uint256,address)": FunctionFragment;
    "isValidContract(string)": FunctionFragment;
    "itemLikesCount(uint256)": FunctionFragment;
    "itemLikesAccounts(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "like"
      | "isValidContract"
      | "itemLikesCount"
      | "itemLikesAccounts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "like",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "itemLikesCount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "itemLikesAccounts",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "like", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "itemLikesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "itemLikesAccounts",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Likes extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LikesInterface;

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
    like(
      itemId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    itemLikesCount(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    itemLikesAccounts(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  like(
    itemId: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isValidContract(
    _type: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  itemLikesCount(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  itemLikesAccounts(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    like(
      itemId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    itemLikesCount(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    itemLikesAccounts(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    like(
      itemId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    itemLikesCount(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    itemLikesAccounts(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    like(
      itemId: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isValidContract(
      _type: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    itemLikesCount(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    itemLikesAccounts(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}