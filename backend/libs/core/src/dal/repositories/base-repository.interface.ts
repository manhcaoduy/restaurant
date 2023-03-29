type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object ? Subset<K[attr]> : K[attr];
};

export type UpdateBody<K> = Subset<K> & {
  $inc?: any;
  $set?: any;
  $pull?: any;
  $push?: any;
  $addToSet?: any;
  $unset?: any;
};
