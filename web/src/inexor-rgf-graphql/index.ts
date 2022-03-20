import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A scalar that can represent any JSON value. */
  JSON: any;
  /**
   * A UUID is a unique 128-bit number, stored as 16 octets. UUIDs are parsed as Strings
   * within GraphQL. UUIDs are used to assign unique identifiers to entities without requiring a central
   * allocating authority.
   *
   * # References
   *
   * * [Wikipedia: Universally Unique Identifier](http://en.wikipedia.org/wiki/Universally_unique_identifier)
   * * [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](http://tools.ietf.org/html/rfc4122)
   */
  UUID: any;
};

/** Components are composable parts which can be used by types (entity type, relation type). */
export class Component {
  __typename?: 'Component';
  /** Textual description of the component. */
  description: Scalars['String'];
  /** Query which entity types are using this component */
  entityTypes: Array<EntityType>;
  /** The extensions which are defined by the component. */
  extensions: Array<Extension>;
  /** The name of the component. */
  name: Scalars['String'];
  /** The properties which are applied on entity or relation instances. */
  properties: Array<PropertyType>;
  /** Query which relation types are using this component */
  relationTypes: Array<RelationType>;
};


/** Components are composable parts which can be used by types (entity type, relation type). */
export class ComponentExtensionsArgs {
  name?: InputMaybe<Scalars['String']>;
};


/** Components are composable parts which can be used by types (entity type, relation type). */
export class ComponentPropertiesArgs {
  name?: InputMaybe<Scalars['String']>;
};

/**
 * The data types of a value.
 *
 * Derived from serde_json::Value but without value payload.
 */
export type DataType =
  /** Represents any type (relations). */
  | 'ANY'
  /** Represents a JSON array. */
  | 'ARRAY'
  /** Represents a JSON boolean. */
  | 'BOOL'
  /** Represents a JSON null value. */
  | 'NULL'
  /** Represents a JSON number, whether integer or floating point. */
  | 'NUMBER'
  /** Represents a JSON object. */
  | 'OBJECT'
  /** Represents a JSON string. */
  | 'STRING';

/**
 * The primary key of an edge consists of the outbound id, the
 * type name and the inbound id.
 */
export class EdgeKeyDefinition {
  /** The id of the inbound entity instance. */
  inboundId: Scalars['UUID'];
  /** The id of the outbound entity instance. */
  outboundId: Scalars['UUID'];
  /** The name of the relation type. */
  typeName: Scalars['String'];
};

/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export class EntityInstance {
  __typename?: 'EntityInstance';
  /**
   * List of behaviours which have been actually applied on the entity instance including
   * behaviours which have been applied after creation.
   */
  behaviours: Array<Scalars['String']>;
  /**
   * List of components which have been actually applied on the entity instance including
   * components which have been added after creation.
   */
  components: Array<Scalars['String']>;
  /** The description of the entity instance. */
  description: Scalars['String'];
  /** The unique identifier of the entity instance. */
  id: Scalars['UUID'];
  /** List of relation instances which ends at this entity instance. */
  inbound: Array<RelationInstance>;
  /** The label of the entity instance if available. */
  label?: Maybe<Scalars['String']>;
  /** List of relation instances which starts at this entity instance. */
  outbound: Array<RelationInstance>;
  /**
   * The properties of then entity instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<PropertyInstance>;
  /** The entity type of the entity instance. */
  type?: Maybe<EntityType>;
};


/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export class EntityInstanceInboundArgs {
  type?: InputMaybe<Scalars['String']>;
};


/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export class EntityInstanceOutboundArgs {
  type?: InputMaybe<Scalars['String']>;
};


/**
 * Entity instances represents an typed objects which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export class EntityInstancePropertiesArgs {
  name?: InputMaybe<Scalars['String']>;
  names?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * Entity instances represents an typed object which contains properties.
 *
 * The entity type defines the properties (name, data type and socket type).
 *
 * In contrast to the entity type the entity instance stores values in it's
 * properties.
 */
export class EntityInstanceDefinition {
  /** The description of the entity instance. */
  description: Scalars['String'];
  /** The unique identifier of the entity instance. */
  id: Scalars['UUID'];
  /**
   * The properties of then entity instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<PropertyInstanceDefinition>;
  /** The name of the entity type. */
  type: Scalars['String'];
};

/** Entity types defines the type of entity instance. */
export class EntityType {
  __typename?: 'EntityType';
  /** The components of the entity type. */
  components: Array<Component>;
  /** Textual description of the entity type. */
  description: Scalars['String'];
  /** The extensions which are defined by the entity type. */
  extensions: Array<Extension>;
  /** The entity type belongs to the given group of entity types. */
  group: Scalars['String'];
  /** List of relation types which has this entity type as inbound. */
  inboundRelations: Array<RelationType>;
  /**
   * The name of the entity type.
   *
   * The name is the unique identifier for entity types.
   */
  name: Scalars['String'];
  /** List of relation types which has this entity type as outbound. */
  outboundRelations: Array<RelationType>;
  /**
   * The properties / property types which are defined by the entity type or
   * by one of the components.
   */
  properties: Array<PropertyType>;
};


/** Entity types defines the type of entity instance. */
export class EntityTypeExtensionsArgs {
  name?: InputMaybe<Scalars['String']>;
};


/** Entity types defines the type of entity instance. */
export class EntityTypePropertiesArgs {
  name?: InputMaybe<Scalars['String']>;
};

/**
 * An extension provides named but schema-less additional information.
 * Entity types, relation types and property types can provide additional
 * meta data. For example an extension named "shape" provides information
 * about the look and feel in the flow editor.
 */
export class Extension {
  __typename?: 'Extension';
  /** The additional information as JSON representation (schema-less). */
  extension: Scalars['JSON'];
  /** The name of the extension. */
  name: Scalars['String'];
};

export class ExtensionDefinition {
  /** The extension as JSON representation. */
  extension: Scalars['JSON'];
  /** The name of the extension. */
  name: Scalars['String'];
};

/**
 * A flow is a container for entity instances and relation instances.
 *
 * A flow is strictly associated with a wrapper entity instance. The properties
 * of the wrapper entity instance are the properties of the flow.
 *
 * Additionally, flows can be nested -  from the perspective of the outer flow
 * the inner flow acts like an entity instance. The wrapper entity instance of
 * the inner flow is the interface which can be accessed by the outer flow.
 *
 * Entity instances and relation instances can be shared with multiple flows.
 *
 * It's even possible to connect entity instances from different flows with relation
 * instances.
 */
export class Flow {
  __typename?: 'Flow';
  /** The entity instances contained by this flow. */
  entities: Array<EntityInstance>;
  /**
   * The id of the flow corresponds to the id of the wrapper entity instance
   *
   * This means the vector of entity instances must contain an instance with
   * the id of the flow.
   */
  id: Scalars['UUID'];
  /** The label of the entity instance if available. */
  label?: Maybe<Scalars['String']>;
  /** The relation instances contained by this flow. */
  relations: Array<RelationInstance>;
  /** The (entity-) type of the flow. */
  type?: Maybe<EntityType>;
  /** The entity instance which is the wrapper for this flow. */
  wrapper?: Maybe<EntityInstance>;
};

/**
 * Represents a flow with entity instances and relation instances.
 *
 * The entity type of the flow and the entity types of each provided entity instance must exist.
 * The relation types of each provided relation instance must exist.
 */
export class FlowDefinition {
  /** Textual description of the flow. */
  description: Scalars['String'];
  /**
   * The entity instances which are contained in this flow.
   *
   * It can't have a default because the wrapper entity instance must be
   * present in the list of entities.
   */
  entityInstances: Array<EntityInstanceDefinition>;
  /**
   * The id of the flow corresponds to the id of the wrapper entity instance
   *
   * This means the vector of entity instances must contain an instance with
   * the id of the flow.
   */
  id: Scalars['UUID'];
  /** The name of the flow. */
  name: Scalars['String'];
  /** The relation instances which are contained in this flow. */
  relationInstances: Array<RelationInstanceDefinition>;
  /** The name of the entity type. */
  type: Scalars['String'];
};

/** Search for instances */
export class Instances {
  __typename?: 'Instances';
  /**
   * Search for entity instances.
   *
   * If an id is given, the entity instance with the given id will be returned.
   *
   * If an entity type is given, only entity instances of the given type are returned.
   */
  entities: Array<EntityInstance>;
  /**
   * Search for relations instances.
   *
   * Relation instances can be searched by relation type name, the entity type of the outbound
   * entity instance, the entity type of the inbound entity instance, the id of the outbound
   * entity instance or the id of the inbound entity instance. All of these filters can be
   * combined.
   */
  relations: Array<RelationInstance>;
};


/** Search for instances */
export class InstancesEntitiesArgs {
  behaviours?: InputMaybe<Array<Scalars['String']>>;
  components?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['UUID']>;
  label?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
  type?: InputMaybe<Scalars['String']>;
};


/** Search for instances */
export class InstancesRelationsArgs {
  behaviours?: InputMaybe<Array<Scalars['String']>>;
  components?: InputMaybe<Array<Scalars['String']>>;
  inboundId?: InputMaybe<Scalars['UUID']>;
  inboundType?: InputMaybe<Scalars['String']>;
  outboundId?: InputMaybe<Scalars['UUID']>;
  outboundType?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
  type?: InputMaybe<Scalars['String']>;
};

/** Mutations for the type system, the instances and the flows. */
export class Mutation {
  __typename?: 'Mutation';
  /** Mutations for flows and their contained instances. */
  flows: MutationFlows;
  /** Mutations for instances (entity instances, relation instances). */
  instances: MutationInstances;
  /** Mutations for types (components, entity types, relation types). */
  types: MutationTypes;
};

/** Mutations for components */
export class MutationComponents {
  __typename?: 'MutationComponents';
  /** Creates a new component with the given name and properties. */
  create: Component;
  delete: Scalars['Boolean'];
};


/** Mutations for components */
export class MutationComponentsCreateArgs {
  name: Scalars['String'];
  properties?: InputMaybe<Array<PropertyTypeDefinition>>;
};


/** Mutations for components */
export class MutationComponentsDeleteArgs {
  name: Scalars['String'];
};

/** Mutation of entity instances. */
export class MutationEntityInstances {
  __typename?: 'MutationEntityInstances';
  /**
   * Creates a new entity instance of the given type.
   *
   * The entity type must exist.
   *
   * Optionally, an UUID can be specified. If no UUID is specified one will be generated
   * randomly.
   *
   * The given properties consists of a list of pairs of property name and property value.
   * If properties are not provided, default values will be used depending on the data type
   * of the property.
   */
  create: EntityInstance;
  /** Deletes an entity instance. */
  delete: Scalars['Boolean'];
  /**
   * Manually tick the entity instance. This means for each property of the entity instance
   * the corresponding reactive stream will be activated with it's last value.
   *
   * This leads to a recalculation if the entity instance is controlled by an behaviour which
   * consumes the reactive streams.
   *
   * Furthermore this leads to a new value propagation if the output property is connected
   * to other properties.
   */
  tick: EntityInstance;
  /** Updates the properties of the entity instance with the given id. */
  update: EntityInstance;
};


/** Mutation of entity instances. */
export class MutationEntityInstancesCreateArgs {
  id?: InputMaybe<Scalars['UUID']>;
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
  type: Scalars['String'];
};


/** Mutation of entity instances. */
export class MutationEntityInstancesDeleteArgs {
  deleteRelations?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['UUID'];
};


/** Mutation of entity instances. */
export class MutationEntityInstancesTickArgs {
  id: Scalars['UUID'];
};


/** Mutation of entity instances. */
export class MutationEntityInstancesUpdateArgs {
  addComponents?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['UUID']>;
  label?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
  removeComponents?: InputMaybe<Array<Scalars['String']>>;
};

/** Mutations for entity types */
export class MutationEntityTypes {
  __typename?: 'MutationEntityTypes';
  /** Creates a new entity type with the given name and components and properties. */
  create: EntityType;
  /** Deletes the entity type with the given name. */
  delete: Scalars['Boolean'];
};


/** Mutations for entity types */
export class MutationEntityTypesCreateArgs {
  components?: InputMaybe<Array<Scalars['String']>>;
  extensions?: InputMaybe<Array<ExtensionDefinition>>;
  group?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  properties?: InputMaybe<Array<PropertyTypeDefinition>>;
};


/** Mutations for entity types */
export class MutationEntityTypesDeleteArgs {
  name: Scalars['String'];
};

/** Mutations for flows and their contained instances. */
export class MutationFlows {
  __typename?: 'MutationFlows';
  /** Adds an existing entity instance by id to the given flow by id */
  addEntity: Flow;
  /** Adds an existing relation instance by edge_key to the given flow by id */
  addRelation: Flow;
  /**
   * Manually ticks all entity instances and relation instances of this flow. This means, for
   * each property of each entity instance and relation instance the corresponding reactive
   * stream will be activated with it's last value.
   *
   * This leads to a recalculation if the instance is controlled by an behaviour which
   * consumes the reactive streams.
   *
   * In case of entity instances, it furthermore leads to a new value propagation if the output
   * property is connected to other properties.
   */
  commit: Flow;
  /**
   * Creates a new flow and a corresponding wrapper entity instance.
   *
   * The given entity type must exist. It provides the properties for the wrapper entity instance
   * and therefore defines which properties of the flow are the inputs and outputs.
   *
   * Optionally, an UUID can be specified.
   *
   * Optionally, the initial values of the properties can be specified. Specified properties
   * which are not provided by the given entity type are lacking of a definition (data type,
   * socket type).
   */
  create: Flow;
  /** Creates a new entity instance and adds the entity instance to the given flow by id. */
  createEntity: Flow;
  /** Creates a new relation instance and adds the relation instance to the given flow by id. */
  createRelation: Flow;
  /**
   * Imports the given flow. Creates entity instances and relation instances which are contained
   * in the given flow.
   */
  import: Flow;
  /** Removes an entity instance from flow. */
  removeEntity: Flow;
  /** Removes an existing relation instance by edge_key from the given flow by id */
  removeRelation: Flow;
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsAddEntityArgs {
  entityId: Scalars['UUID'];
  flowId: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsAddRelationArgs {
  edgeKey: EdgeKeyDefinition;
  flowId: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsCommitArgs {
  id: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsCreateArgs {
  flowId?: InputMaybe<Scalars['UUID']>;
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
  type: Scalars['String'];
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsCreateEntityArgs {
  entityId?: InputMaybe<Scalars['UUID']>;
  flowId: Scalars['UUID'];
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
  type: Scalars['String'];
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsCreateRelationArgs {
  edgeKey: EdgeKeyDefinition;
  flowId: Scalars['UUID'];
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsImportArgs {
  flow: FlowDefinition;
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsRemoveEntityArgs {
  entityId: Scalars['UUID'];
  flowId: Scalars['UUID'];
};


/** Mutations for flows and their contained instances. */
export class MutationFlowsRemoveRelationArgs {
  edgeKey: EdgeKeyDefinition;
  flowId: Scalars['UUID'];
};

/** Mutations on instances. */
export class MutationInstances {
  __typename?: 'MutationInstances';
  /** Mutations on entity instances. */
  entities: MutationEntityInstances;
  /** Mutations on relation instances. */
  relations: MutationRelationInstances;
};

/** Mutation of relation instances. */
export class MutationRelationInstances {
  __typename?: 'MutationRelationInstances';
  /**
   * Creates a new relation instance with the given edge_key.
   *
   * The edge key is the primary key of a relation instance and consists of the id of the
   * outbound entity instance, the name of the relation type and the id of the inbound
   * entity instance.
   *
   * The relation type must exist and the given type name is matched by a prefix search.
   * For example a given type name "default_connector--property_name--property_name" will match
   * as relation type "default_connector".
   *
   * Furthermore the outbound and the inbound entity instance must exist.
   *
   * The given properties consists of a list of pairs of property name and property value.
   * If properties are not provided, default values will be used depending on the data type
   * of the property.
   */
  create: RelationInstance;
  /** Deletes an relation instance. */
  delete: Scalars['Boolean'];
  /**
   * Manually tick the relation instance. This means for each property of the entity instance
   * the corresponding reactive stream will be activated with it's last value.
   *
   * This leads to a recalculation if the relation instance is controlled by an behaviour which
   * consumes the reactive streams.
   *
   * In case of the default_connector it does NOT lead to a new value propagation, because the
   * reactive streams are not consumed by the default_connector behaviour.
   */
  tick: RelationInstance;
  /** Updates the properties of the given relation instance by edge key. */
  update: RelationInstance;
};


/** Mutation of relation instances. */
export class MutationRelationInstancesCreateArgs {
  edgeKey: EdgeKeyDefinition;
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
};


/** Mutation of relation instances. */
export class MutationRelationInstancesDeleteArgs {
  edgeKey: EdgeKeyDefinition;
};


/** Mutation of relation instances. */
export class MutationRelationInstancesTickArgs {
  edgeKey: EdgeKeyDefinition;
};


/** Mutation of relation instances. */
export class MutationRelationInstancesUpdateArgs {
  addComponents?: InputMaybe<Array<Scalars['String']>>;
  edgeKey: EdgeKeyDefinition;
  properties?: InputMaybe<Array<PropertyInstanceDefinition>>;
  removeComponents?: InputMaybe<Array<Scalars['String']>>;
};

/** Mutations for relation types */
export class MutationRelationTypes {
  __typename?: 'MutationRelationTypes';
  /**
   * Creates a new relation type with the given name and components and properties.
   *
   * The outbound entity type and the inbound entity type must be specified.
   */
  create: RelationType;
  /** Deletes the relation type with the given name. */
  delete: Scalars['Boolean'];
};


/** Mutations for relation types */
export class MutationRelationTypesCreateArgs {
  components?: InputMaybe<Array<Scalars['String']>>;
  extensions?: InputMaybe<Array<ExtensionDefinition>>;
  inboundType: Scalars['String'];
  name: Scalars['String'];
  outboundType: Scalars['String'];
  properties?: InputMaybe<Array<PropertyTypeDefinition>>;
};


/** Mutations for relation types */
export class MutationRelationTypesDeleteArgs {
  name: Scalars['String'];
};

/** Mutations for types (components, entity types, relation types). */
export class MutationTypes {
  __typename?: 'MutationTypes';
  /** Mutations for components */
  components: MutationComponents;
  /** Mutations for entity types */
  entities: MutationEntityTypes;
  /** Mutations for relation types */
  relations: MutationRelationTypes;
};

/**
 * The named property stores a value/document as JSON representation.
 *
 * Each property is represented by it's name (String) and it's value. The value is
 * a representation of a JSON value/document. Therefore the value can be boolean,
 * number, string, array or an object. For more information about the data types
 * please look at https://docs.serde.rs/serde_json/value/enum.Value.html
 */
export class PropertyInstance {
  __typename?: 'PropertyInstance';
  /** The name of the property. */
  name: Scalars['String'];
  /** The type of the property. */
  type?: Maybe<PropertyType>;
  /** The value of the property as JSON representation. */
  value: Scalars['JSON'];
};

export class PropertyInstanceDefinition {
  /** The name of the property. */
  name: Scalars['String'];
  /** The value of the property as JSON representation. */
  value: Scalars['JSON'];
};

/**
 * Property types defines the type of a property instance.
 * The property type defines the name, the data type and
 * the socket type of a property. A property type does not
 * contain any value.
 */
export class PropertyType {
  __typename?: 'PropertyType';
  /** The data type of the property instances. */
  dataType: DataType;
  /** Textual description of the component. */
  description: Scalars['String'];
  /** The extensions which are defined by the entity type. */
  extensions: Array<Extension>;
  /** The name of the component. */
  name: Scalars['String'];
  /** The socket type of the property instances. */
  socketType: SocketType;
};


/**
 * Property types defines the type of a property instance.
 * The property type defines the name, the data type and
 * the socket type of a property. A property type does not
 * contain any value.
 */
export class PropertyTypeExtensionsArgs {
  name?: InputMaybe<Scalars['String']>;
};

export class PropertyTypeDefinition {
  /** The data type of the property */
  dataType: DataType;
  /** The description of the property */
  description: Scalars['String'];
  /** Property specific extensions */
  extensions: Array<ExtensionDefinition>;
  /** The name of the property */
  name: Scalars['String'];
  /** Specifies which type of socket */
  socketType: SocketType;
};

/** Search queries for the type system, the instances and the flows. */
export class Query {
  __typename?: 'Query';
  /** Search for flows and their contained instances. */
  flows: Array<Flow>;
  /** Search for instances (entity instances, relation instances). */
  instances: Instances;
  /** Search for types (components, entity types, relation types). */
  types: Types;
};


/** Search queries for the type system, the instances and the flows. */
export class QueryFlowsArgs {
  id?: InputMaybe<Scalars['UUID']>;
  label?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/**
 * Relation instances are edges from an outbound entity instance to an
 * inbound entity instance.
 *
 * The relation instance is of a relation type. The relation type defines
 * the entity types of the outbound entity instance and the inbound entity
 * instance. Furthermore the relation type defines which properties
 * (name, data type, socket type) a relation instance have to have.
 *
 * In contrast to the relation type, the relation instance stores values/
 * documents in it's properties.
 */
export class RelationInstance {
  __typename?: 'RelationInstance';
  /**
   * List of behaviours which have been actually applied on the relation instance including
   * behaviours which have been applied after creation.
   */
  behaviours: Array<Scalars['String']>;
  /**
   * List of components which have been actually applied on the relation instance including
   * components which have been added after creation.
   */
  components: Array<Scalars['String']>;
  /** Textual description of the relation instance. */
  description: Scalars['String'];
  /**
   * The inbound entity instance.
   *
   * You can use this in order to navigate from the inbound entity instance to the outbound
   * entity instance or vice versa.
   */
  inbound: EntityInstance;
  /**
   * The outbound entity instance.
   *
   * You can use this in order to navigate from the outbound entity instance to the inbound
   * entity instance or vice versa.
   */
  outbound: EntityInstance;
  /**
   * The properties of then relation instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<PropertyInstance>;
  /** The relation type. */
  type?: Maybe<RelationType>;
};


/**
 * Relation instances are edges from an outbound entity instance to an
 * inbound entity instance.
 *
 * The relation instance is of a relation type. The relation type defines
 * the entity types of the outbound entity instance and the inbound entity
 * instance. Furthermore the relation type defines which properties
 * (name, data type, socket type) a relation instance have to have.
 *
 * In contrast to the relation type, the relation instance stores values/
 * documents in it's properties.
 */
export class RelationInstancePropertiesArgs {
  name?: InputMaybe<Scalars['String']>;
  names?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * Relation instances are edges from an outbound entity instance to an
 * inbound entity instance.
 *
 * The relation instance is of a relation type. The relation type defines
 * the entity types of the outbound entity instance and the inbound entity
 * instance. Furthermore the relation type defines which properties
 * (name, data type, socket type) a relation instance have to have.
 *
 * In constrast to the relation type, the relation instance stores values/
 * documents in it's properties.
 */
export class RelationInstanceDefinition {
  /** Textual description of the relation instance. */
  description: Scalars['String'];
  /** The id of the inbound vertex. */
  inboundId: Scalars['UUID'];
  /** The id of the outbound vertex. */
  outboundId: Scalars['UUID'];
  /**
   * The properties of then relation instance.
   *
   * Each property is represented by it's name (String) and it's value. The value is
   * a representation of a JSON. Therefore the value can be boolean, number, string,
   * array or an object. For more information about the data types please look at
   * https://docs.serde.rs/serde_json/value/enum.Value.html
   */
  properties: Array<PropertyInstanceDefinition>;
  /** The name of the relation type */
  type: Scalars['String'];
};

/**
 * A relation type defines the type of an relation instance.
 *
 * The relation type defines the entity types of the outbound and inbound entity instances.
 * Also the relation type defines the properties of the relation instance.
 */
export class RelationType {
  __typename?: 'RelationType';
  /** The relation type composes it's properties by these components. */
  components: Array<Component>;
  /** Textual description of the relation type. */
  description: Scalars['String'];
  /** The extensions which are defined by the relation type. */
  extensions: Array<Extension>;
  /**
   * The full name of the relation type.
   *
   * Returns "default_connector__property_name__property_name" (with type suffix).
   */
  fullName: Scalars['String'];
  /** The relation type belongs to the given group of relation types. */
  group: Scalars['String'];
  /** The inbound entity type. */
  inboundTypes: Array<EntityType>;
  /**
   * The name of the relation type.
   *
   * The name is the unique identifier for relation types.
   *
   * Returns "default_connector" for "default_connector__property_name__property_name"
   * (without type suffix).
   */
  name: Scalars['String'];
  /** The outbound entity type. */
  outboundTypes: Array<EntityType>;
  /**
   * The properties / property types which are defined by the relation type or
   * by one of the components.
   */
  properties: Array<PropertyType>;
};


/**
 * A relation type defines the type of an relation instance.
 *
 * The relation type defines the entity types of the outbound and inbound entity instances.
 * Also the relation type defines the properties of the relation instance.
 */
export class RelationTypeExtensionsArgs {
  name?: InputMaybe<Scalars['String']>;
};


/**
 * A relation type defines the type of an relation instance.
 *
 * The relation type defines the entity types of the outbound and inbound entity instances.
 * Also the relation type defines the properties of the relation instance.
 */
export class RelationTypePropertiesArgs {
  name?: InputMaybe<Scalars['String']>;
};

/**
 * The socket type defines if the property acts as an input or output socket
 * or is an hidden property
 */
export type SocketType =
  /** The property acts as input socket and accepts incoming connections. */
  | 'INPUT'
  /** The property doesn't act as input or output socket. */
  | 'NONE'
  /** The property acts as output socket and accepts outgoing connections. */
  | 'OUTPUT';

/** Subscriptions for the reactive property instances. */
export class Subscription {
  __typename?: 'Subscription';
  entity: PropertyInstance;
  relation: PropertyInstance;
};


/** Subscriptions for the reactive property instances. */
export class SubscriptionEntityArgs {
  id?: InputMaybe<Scalars['UUID']>;
  label?: InputMaybe<Scalars['String']>;
  propertyName: Scalars['String'];
};


/** Subscriptions for the reactive property instances. */
export class SubscriptionRelationArgs {
  edgeKey: EdgeKeyDefinition;
  propertyName: Scalars['String'];
};

/** Search for types (components, entity types or relation types) */
export class Types {
  __typename?: 'Types';
  /**
   * Search for components
   *
   * Optionally the list of components can be filtered by name.
   */
  components: Array<Component>;
  /**
   * Search for entity types.
   *
   * Optionally the list of entity types can be filtered by name.
   */
  entities: Array<EntityType>;
  /** Search for relation types. */
  relations: Array<RelationType>;
};


/** Search for types (components, entity types or relation types) */
export class TypesComponentsArgs {
  name?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


/** Search for types (components, entity types or relation types) */
export class TypesEntitiesArgs {
  name?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};


/** Search for types (components, entity types or relation types) */
export class TypesRelationsArgs {
  inboundType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  outboundType?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};

export type FullPropertyInstanceFragment = { __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null };

export type PropertyInstanceReferenceFragment = { __typename?: 'PropertyInstance', type?: { __typename?: 'PropertyType', name: string } | null };

export type FullEntityInstanceWithComponentsFragment = { __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> };

export type FullEntityInstanceFragment = { __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> };

export type EntityInstanceReferenceFragment = { __typename?: 'EntityInstance', id: any, type?: { __typename?: 'EntityType', name: string } | null };

export type CreateEntityInstanceMutationVariables = Exact<{
  type: Scalars['String'];
  properties?: InputMaybe<Array<PropertyInstanceDefinition> | PropertyInstanceDefinition>;
}>;


export type CreateEntityInstanceMutation = { __typename?: 'Mutation', instances: { __typename?: 'MutationInstances', entities: { __typename?: 'MutationEntityInstances', create: { __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> } } } };

export type CreateEntityInstanceWithIdMutationVariables = Exact<{
  type: Scalars['String'];
  id: Scalars['UUID'];
  properties?: InputMaybe<Array<PropertyInstanceDefinition> | PropertyInstanceDefinition>;
}>;


export type CreateEntityInstanceWithIdMutation = { __typename?: 'Mutation', instances: { __typename?: 'MutationInstances', entities: { __typename?: 'MutationEntityInstances', create: { __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> } } } };

export type DeleteEntityInstanceMutationVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type DeleteEntityInstanceMutation = { __typename?: 'Mutation', instances: { __typename?: 'MutationInstances', entities: { __typename?: 'MutationEntityInstances', delete: boolean } } };

export type GetEntityInstanceByLabelQueryVariables = Exact<{
  label?: InputMaybe<Scalars['String']>;
}>;


export type GetEntityInstanceByLabelQuery = { __typename?: 'Query', instances: { __typename?: 'Instances', entities: Array<{ __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> }> } };

export type GetEntityInstanceByUuidQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetEntityInstanceByUuidQuery = { __typename?: 'Query', instances: { __typename?: 'Instances', entities: Array<{ __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> }> } };

export type GetEntityInstancesByTypeQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type GetEntityInstancesByTypeQuery = { __typename?: 'Query', instances: { __typename?: 'Instances', entities: Array<{ __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> }> } };

export type UpdateEntityInstanceMutationVariables = Exact<{
  id: Scalars['UUID'];
  properties?: InputMaybe<Array<PropertyInstanceDefinition> | PropertyInstanceDefinition>;
}>;


export type UpdateEntityInstanceMutation = { __typename?: 'Mutation', instances: { __typename?: 'MutationInstances', entities: { __typename?: 'MutationEntityInstances', update: { __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> } } } };

export type FullRelationInstanceFragment = { __typename?: 'RelationInstance', description: string, components: Array<string>, behaviours: Array<string>, inbound: { __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> }, outbound: { __typename?: 'EntityInstance', id: any, label?: string | null, description: string, components: Array<string>, behaviours: Array<string>, type?: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> }, type?: { __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null, properties: Array<{ __typename?: 'PropertyInstance', name: string, value: any, type?: { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } | null }> };

export type RelationInstanceReferenceFragment = { __typename?: 'RelationInstance', inbound: { __typename?: 'EntityInstance', id: any, type?: { __typename?: 'EntityType', name: string } | null }, outbound: { __typename?: 'EntityInstance', id: any, type?: { __typename?: 'EntityType', name: string } | null }, type?: { __typename?: 'RelationType', name: string } | null };

export type FullExtensionFragment = { __typename?: 'Extension', name: string, extension: any };

export type ExtensionReferenceFragment = { __typename?: 'Extension', name: string };

export type FullPropertyTypeFragment = { __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> };

export type PropertyTypeReferenceFragment = { __typename?: 'PropertyType', name: string };

export type FullComponentFragment = { __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> };

export type ComponentReferenceFragment = { __typename?: 'Component', name: string };

export type CreateComponentMutationVariables = Exact<{
  name: Scalars['String'];
  properties?: InputMaybe<Array<PropertyTypeDefinition> | PropertyTypeDefinition>;
}>;


export type CreateComponentMutation = { __typename?: 'Mutation', types: { __typename?: 'MutationTypes', components: { __typename?: 'MutationComponents', create: { __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } } } };

export type DeleteComponentMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type DeleteComponentMutation = { __typename?: 'Mutation', types: { __typename?: 'MutationTypes', components: { __typename?: 'MutationComponents', delete: boolean } } };

export type GetAllComponentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllComponentsQuery = { __typename?: 'Query', types: { __typename?: 'Types', components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type GetComponentByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetComponentByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type GetEntityTypesUsesComponentByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetEntityTypesUsesComponentByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', components: Array<{ __typename?: 'Component', entityTypes: Array<{ __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> }> } };

export type GetRelationTypesUsesComponentByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetRelationTypesUsesComponentByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', components: Array<{ __typename?: 'Component', relationTypes: Array<{ __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> }> } };

export type SearchComponentByNameQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchComponentByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type FullEntityTypeWithComponentsFragment = { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> };

export type FullEntityTypeFragment = { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> };

export type EntityTypeReferenceFragment = { __typename?: 'EntityType', name: string };

export type CreateEntityTypeMutationVariables = Exact<{
  name: Scalars['String'];
  components?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  properties?: InputMaybe<Array<PropertyTypeDefinition> | PropertyTypeDefinition>;
  extensions?: InputMaybe<Array<ExtensionDefinition> | ExtensionDefinition>;
}>;


export type CreateEntityTypeMutation = { __typename?: 'Mutation', types: { __typename?: 'MutationTypes', entities: { __typename?: 'MutationEntityTypes', create: { __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } } } };

export type DeleteEntityTypeMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type DeleteEntityTypeMutation = { __typename?: 'Mutation', types: { __typename?: 'MutationTypes', entities: { __typename?: 'MutationEntityTypes', delete: boolean } } };

export type GetAllEntityTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEntityTypesQuery = { __typename?: 'Query', types: { __typename?: 'Types', entities: Array<{ __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type GetComponentsByEntityTypeQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetComponentsByEntityTypeQuery = { __typename?: 'Query', types: { __typename?: 'Types', entities: Array<{ __typename?: 'EntityType', components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> }> } };

export type GetEntityTypeByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetEntityTypeByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', entities: Array<{ __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type GetInboundRelationsByEntityTypeQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetInboundRelationsByEntityTypeQuery = { __typename?: 'Query', types: { __typename?: 'Types', entities: Array<{ __typename?: 'EntityType', inboundRelations: Array<{ __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> }> } };

export type GetOutboundRelationsByEntityTypeQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetOutboundRelationsByEntityTypeQuery = { __typename?: 'Query', types: { __typename?: 'Types', entities: Array<{ __typename?: 'EntityType', outboundRelations: Array<{ __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> }> } };

export type SearchEntityTypesByNameQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchEntityTypesByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', entities: Array<{ __typename?: 'EntityType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundRelations: Array<{ __typename?: 'RelationType', name: string }>, inboundRelations: Array<{ __typename?: 'RelationType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type FullRelationTypeFragment = { __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> };

export type RelationTypeReferenceFragment = { __typename?: 'RelationType', name: string };

export type CreateRelationTypeMutationVariables = Exact<{
  outboundType: Scalars['String'];
  name: Scalars['String'];
  inboundType: Scalars['String'];
  components?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  properties?: InputMaybe<Array<PropertyTypeDefinition> | PropertyTypeDefinition>;
  extensions?: InputMaybe<Array<ExtensionDefinition> | ExtensionDefinition>;
}>;


export type CreateRelationTypeMutation = { __typename?: 'Mutation', types: { __typename?: 'MutationTypes', relations: { __typename?: 'MutationRelationTypes', create: { __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> } } } };

export type DeleteRelationTypeMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type DeleteRelationTypeMutation = { __typename?: 'Mutation', types: { __typename?: 'MutationTypes', relations: { __typename?: 'MutationRelationTypes', delete: boolean } } };

export type GetAllRelationTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRelationTypesQuery = { __typename?: 'Query', types: { __typename?: 'Types', relations: Array<{ __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type GetComponentsByRelationTypeQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetComponentsByRelationTypeQuery = { __typename?: 'Query', types: { __typename?: 'Types', relations: Array<{ __typename?: 'RelationType', components: Array<{ __typename?: 'Component', name: string, description: string, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> }> } };

export type GetRelationTypeByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetRelationTypeByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', relations: Array<{ __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export type SearchRelationTypesByNameQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchRelationTypesByNameQuery = { __typename?: 'Query', types: { __typename?: 'Types', relations: Array<{ __typename?: 'RelationType', name: string, description: string, components: Array<{ __typename?: 'Component', name: string }>, outboundTypes: Array<{ __typename?: 'EntityType', name: string }>, inboundTypes: Array<{ __typename?: 'EntityType', name: string }>, properties: Array<{ __typename?: 'PropertyType', name: string, dataType: DataType, socketType: SocketType, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }>, extensions: Array<{ __typename?: 'Extension', name: string, extension: any }> }> } };

export const PropertyTypeReferenceFragmentDoc = gql`
    fragment PropertyTypeReference on PropertyType {
  name
}
    `;
export const PropertyInstanceReferenceFragmentDoc = gql`
    fragment PropertyInstanceReference on PropertyInstance {
  type {
    ...PropertyTypeReference
  }
}
    ${PropertyTypeReferenceFragmentDoc}`;
export const FullPropertyTypeFragmentDoc = gql`
    fragment FullPropertyType on PropertyType {
  name
  dataType
  socketType
  extensions {
    name
    extension
  }
}
    `;
export const FullExtensionFragmentDoc = gql`
    fragment FullExtension on Extension {
  name
  extension
}
    `;
export const FullComponentFragmentDoc = gql`
    fragment FullComponent on Component {
  name
  description
  properties {
    ...FullPropertyType
  }
  extensions {
    ...FullExtension
  }
}
    ${FullPropertyTypeFragmentDoc}
${FullExtensionFragmentDoc}`;
export const RelationTypeReferenceFragmentDoc = gql`
    fragment RelationTypeReference on RelationType {
  name
}
    `;
export const FullEntityTypeWithComponentsFragmentDoc = gql`
    fragment FullEntityTypeWithComponents on EntityType {
  name
  description
  components {
    ...FullComponent
  }
  outboundRelations {
    ...RelationTypeReference
  }
  inboundRelations {
    ...RelationTypeReference
  }
  properties {
    ...FullPropertyType
  }
  extensions {
    ...FullExtension
  }
}
    ${FullComponentFragmentDoc}
${RelationTypeReferenceFragmentDoc}
${FullPropertyTypeFragmentDoc}
${FullExtensionFragmentDoc}`;
export const FullPropertyInstanceFragmentDoc = gql`
    fragment FullPropertyInstance on PropertyInstance {
  name
  value
  type {
    ...FullPropertyType
  }
}
    ${FullPropertyTypeFragmentDoc}`;
export const FullEntityInstanceWithComponentsFragmentDoc = gql`
    fragment FullEntityInstanceWithComponents on EntityInstance {
  id
  label
  type {
    ...FullEntityTypeWithComponents
  }
  description
  components
  behaviours
  properties {
    ...FullPropertyInstance
  }
}
    ${FullEntityTypeWithComponentsFragmentDoc}
${FullPropertyInstanceFragmentDoc}`;
export const ComponentReferenceFragmentDoc = gql`
    fragment ComponentReference on Component {
  name
}
    `;
export const FullEntityTypeFragmentDoc = gql`
    fragment FullEntityType on EntityType {
  name
  description
  components {
    ...ComponentReference
  }
  outboundRelations {
    ...RelationTypeReference
  }
  inboundRelations {
    ...RelationTypeReference
  }
  properties {
    ...FullPropertyType
  }
  extensions {
    ...FullExtension
  }
}
    ${ComponentReferenceFragmentDoc}
${RelationTypeReferenceFragmentDoc}
${FullPropertyTypeFragmentDoc}
${FullExtensionFragmentDoc}`;
export const FullEntityInstanceFragmentDoc = gql`
    fragment FullEntityInstance on EntityInstance {
  id
  label
  type {
    ...FullEntityType
  }
  description
  components
  behaviours
  properties {
    ...FullPropertyInstance
  }
}
    ${FullEntityTypeFragmentDoc}
${FullPropertyInstanceFragmentDoc}`;
export const EntityTypeReferenceFragmentDoc = gql`
    fragment EntityTypeReference on EntityType {
  name
}
    `;
export const FullRelationTypeFragmentDoc = gql`
    fragment FullRelationType on RelationType {
  name
  description
  components {
    ...ComponentReference
  }
  outboundTypes {
    ...EntityTypeReference
  }
  inboundTypes {
    ...EntityTypeReference
  }
  properties {
    ...FullPropertyType
  }
  extensions {
    ...FullExtension
  }
}
    ${ComponentReferenceFragmentDoc}
${EntityTypeReferenceFragmentDoc}
${FullPropertyTypeFragmentDoc}
${FullExtensionFragmentDoc}`;
export const FullRelationInstanceFragmentDoc = gql`
    fragment FullRelationInstance on RelationInstance {
  inbound {
    ...FullEntityInstance
  }
  outbound {
    ...FullEntityInstance
  }
  type {
    ...FullRelationType
  }
  description
  components
  behaviours
  properties {
    ...FullPropertyInstance
  }
}
    ${FullEntityInstanceFragmentDoc}
${FullRelationTypeFragmentDoc}
${FullPropertyInstanceFragmentDoc}`;
export const EntityInstanceReferenceFragmentDoc = gql`
    fragment EntityInstanceReference on EntityInstance {
  id
  type {
    ...EntityTypeReference
  }
}
    ${EntityTypeReferenceFragmentDoc}`;
export const RelationInstanceReferenceFragmentDoc = gql`
    fragment RelationInstanceReference on RelationInstance {
  inbound {
    ...EntityInstanceReference
  }
  outbound {
    ...EntityInstanceReference
  }
  type {
    ...RelationTypeReference
  }
}
    ${EntityInstanceReferenceFragmentDoc}
${RelationTypeReferenceFragmentDoc}`;
export const ExtensionReferenceFragmentDoc = gql`
    fragment ExtensionReference on Extension {
  name
}
    `;
export const CreateEntityInstanceDocument = gql`
    mutation createEntityInstance($type: String!, $properties: [PropertyInstanceDefinition!]) {
  instances {
    entities {
      create(type: $type, properties: $properties) {
        ...FullEntityInstanceWithComponents
      }
    }
  }
}
    ${FullEntityInstanceWithComponentsFragmentDoc}`;
export type CreateEntityInstanceMutationFn = Apollo.MutationFunction<CreateEntityInstanceMutation, CreateEntityInstanceMutationVariables>;

/**
 * __useCreateEntityInstanceMutation__
 *
 * To run a mutation, you first call `useCreateEntityInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEntityInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEntityInstanceMutation, { data, loading, error }] = useCreateEntityInstanceMutation({
 *   variables: {
 *      type: // value for 'type'
 *      properties: // value for 'properties'
 *   },
 * });
 */
export function useCreateEntityInstanceMutation(baseOptions?: Apollo.MutationHookOptions<CreateEntityInstanceMutation, CreateEntityInstanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEntityInstanceMutation, CreateEntityInstanceMutationVariables>(CreateEntityInstanceDocument, options);
      }
export type CreateEntityInstanceMutationHookResult = ReturnType<typeof useCreateEntityInstanceMutation>;
export type CreateEntityInstanceMutationResult = Apollo.MutationResult<CreateEntityInstanceMutation>;
export type CreateEntityInstanceMutationOptions = Apollo.BaseMutationOptions<CreateEntityInstanceMutation, CreateEntityInstanceMutationVariables>;
export const CreateEntityInstanceWithIdDocument = gql`
    mutation createEntityInstanceWithId($type: String!, $id: UUID!, $properties: [PropertyInstanceDefinition!]) {
  instances {
    entities {
      create(type: $type, id: $id, properties: $properties) {
        ...FullEntityInstanceWithComponents
      }
    }
  }
}
    ${FullEntityInstanceWithComponentsFragmentDoc}`;
export type CreateEntityInstanceWithIdMutationFn = Apollo.MutationFunction<CreateEntityInstanceWithIdMutation, CreateEntityInstanceWithIdMutationVariables>;

/**
 * __useCreateEntityInstanceWithIdMutation__
 *
 * To run a mutation, you first call `useCreateEntityInstanceWithIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEntityInstanceWithIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEntityInstanceWithIdMutation, { data, loading, error }] = useCreateEntityInstanceWithIdMutation({
 *   variables: {
 *      type: // value for 'type'
 *      id: // value for 'id'
 *      properties: // value for 'properties'
 *   },
 * });
 */
export function useCreateEntityInstanceWithIdMutation(baseOptions?: Apollo.MutationHookOptions<CreateEntityInstanceWithIdMutation, CreateEntityInstanceWithIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEntityInstanceWithIdMutation, CreateEntityInstanceWithIdMutationVariables>(CreateEntityInstanceWithIdDocument, options);
      }
export type CreateEntityInstanceWithIdMutationHookResult = ReturnType<typeof useCreateEntityInstanceWithIdMutation>;
export type CreateEntityInstanceWithIdMutationResult = Apollo.MutationResult<CreateEntityInstanceWithIdMutation>;
export type CreateEntityInstanceWithIdMutationOptions = Apollo.BaseMutationOptions<CreateEntityInstanceWithIdMutation, CreateEntityInstanceWithIdMutationVariables>;
export const DeleteEntityInstanceDocument = gql`
    mutation deleteEntityInstance($id: UUID!) {
  instances {
    entities {
      delete(id: $id)
    }
  }
}
    `;
export type DeleteEntityInstanceMutationFn = Apollo.MutationFunction<DeleteEntityInstanceMutation, DeleteEntityInstanceMutationVariables>;

/**
 * __useDeleteEntityInstanceMutation__
 *
 * To run a mutation, you first call `useDeleteEntityInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEntityInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEntityInstanceMutation, { data, loading, error }] = useDeleteEntityInstanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEntityInstanceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEntityInstanceMutation, DeleteEntityInstanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEntityInstanceMutation, DeleteEntityInstanceMutationVariables>(DeleteEntityInstanceDocument, options);
      }
export type DeleteEntityInstanceMutationHookResult = ReturnType<typeof useDeleteEntityInstanceMutation>;
export type DeleteEntityInstanceMutationResult = Apollo.MutationResult<DeleteEntityInstanceMutation>;
export type DeleteEntityInstanceMutationOptions = Apollo.BaseMutationOptions<DeleteEntityInstanceMutation, DeleteEntityInstanceMutationVariables>;
export const GetEntityInstanceByLabelDocument = gql`
    query getEntityInstanceByLabel($label: String) {
  instances {
    entities(label: $label) {
      ...FullEntityInstanceWithComponents
    }
  }
}
    ${FullEntityInstanceWithComponentsFragmentDoc}`;

/**
 * __useGetEntityInstanceByLabelQuery__
 *
 * To run a query within a React component, call `useGetEntityInstanceByLabelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityInstanceByLabelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityInstanceByLabelQuery({
 *   variables: {
 *      label: // value for 'label'
 *   },
 * });
 */
export function useGetEntityInstanceByLabelQuery(baseOptions?: Apollo.QueryHookOptions<GetEntityInstanceByLabelQuery, GetEntityInstanceByLabelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntityInstanceByLabelQuery, GetEntityInstanceByLabelQueryVariables>(GetEntityInstanceByLabelDocument, options);
      }
export function useGetEntityInstanceByLabelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntityInstanceByLabelQuery, GetEntityInstanceByLabelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntityInstanceByLabelQuery, GetEntityInstanceByLabelQueryVariables>(GetEntityInstanceByLabelDocument, options);
        }
export type GetEntityInstanceByLabelQueryHookResult = ReturnType<typeof useGetEntityInstanceByLabelQuery>;
export type GetEntityInstanceByLabelLazyQueryHookResult = ReturnType<typeof useGetEntityInstanceByLabelLazyQuery>;
export type GetEntityInstanceByLabelQueryResult = Apollo.QueryResult<GetEntityInstanceByLabelQuery, GetEntityInstanceByLabelQueryVariables>;
export const GetEntityInstanceByUuidDocument = gql`
    query getEntityInstanceByUuid($id: UUID!) {
  instances {
    entities(id: $id) {
      ...FullEntityInstanceWithComponents
    }
  }
}
    ${FullEntityInstanceWithComponentsFragmentDoc}`;

/**
 * __useGetEntityInstanceByUuidQuery__
 *
 * To run a query within a React component, call `useGetEntityInstanceByUuidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityInstanceByUuidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityInstanceByUuidQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEntityInstanceByUuidQuery(baseOptions: Apollo.QueryHookOptions<GetEntityInstanceByUuidQuery, GetEntityInstanceByUuidQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntityInstanceByUuidQuery, GetEntityInstanceByUuidQueryVariables>(GetEntityInstanceByUuidDocument, options);
      }
export function useGetEntityInstanceByUuidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntityInstanceByUuidQuery, GetEntityInstanceByUuidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntityInstanceByUuidQuery, GetEntityInstanceByUuidQueryVariables>(GetEntityInstanceByUuidDocument, options);
        }
export type GetEntityInstanceByUuidQueryHookResult = ReturnType<typeof useGetEntityInstanceByUuidQuery>;
export type GetEntityInstanceByUuidLazyQueryHookResult = ReturnType<typeof useGetEntityInstanceByUuidLazyQuery>;
export type GetEntityInstanceByUuidQueryResult = Apollo.QueryResult<GetEntityInstanceByUuidQuery, GetEntityInstanceByUuidQueryVariables>;
export const GetEntityInstancesByTypeDocument = gql`
    query getEntityInstancesByType($type: String!) {
  instances {
    entities(type: $type) {
      ...FullEntityInstanceWithComponents
    }
  }
}
    ${FullEntityInstanceWithComponentsFragmentDoc}`;

/**
 * __useGetEntityInstancesByTypeQuery__
 *
 * To run a query within a React component, call `useGetEntityInstancesByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityInstancesByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityInstancesByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetEntityInstancesByTypeQuery(baseOptions: Apollo.QueryHookOptions<GetEntityInstancesByTypeQuery, GetEntityInstancesByTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntityInstancesByTypeQuery, GetEntityInstancesByTypeQueryVariables>(GetEntityInstancesByTypeDocument, options);
      }
export function useGetEntityInstancesByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntityInstancesByTypeQuery, GetEntityInstancesByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntityInstancesByTypeQuery, GetEntityInstancesByTypeQueryVariables>(GetEntityInstancesByTypeDocument, options);
        }
export type GetEntityInstancesByTypeQueryHookResult = ReturnType<typeof useGetEntityInstancesByTypeQuery>;
export type GetEntityInstancesByTypeLazyQueryHookResult = ReturnType<typeof useGetEntityInstancesByTypeLazyQuery>;
export type GetEntityInstancesByTypeQueryResult = Apollo.QueryResult<GetEntityInstancesByTypeQuery, GetEntityInstancesByTypeQueryVariables>;
export const UpdateEntityInstanceDocument = gql`
    mutation updateEntityInstance($id: UUID!, $properties: [PropertyInstanceDefinition!]) {
  instances {
    entities {
      update(id: $id, properties: $properties) {
        ...FullEntityInstance
      }
    }
  }
}
    ${FullEntityInstanceFragmentDoc}`;
export type UpdateEntityInstanceMutationFn = Apollo.MutationFunction<UpdateEntityInstanceMutation, UpdateEntityInstanceMutationVariables>;

/**
 * __useUpdateEntityInstanceMutation__
 *
 * To run a mutation, you first call `useUpdateEntityInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEntityInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEntityInstanceMutation, { data, loading, error }] = useUpdateEntityInstanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      properties: // value for 'properties'
 *   },
 * });
 */
export function useUpdateEntityInstanceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEntityInstanceMutation, UpdateEntityInstanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEntityInstanceMutation, UpdateEntityInstanceMutationVariables>(UpdateEntityInstanceDocument, options);
      }
export type UpdateEntityInstanceMutationHookResult = ReturnType<typeof useUpdateEntityInstanceMutation>;
export type UpdateEntityInstanceMutationResult = Apollo.MutationResult<UpdateEntityInstanceMutation>;
export type UpdateEntityInstanceMutationOptions = Apollo.BaseMutationOptions<UpdateEntityInstanceMutation, UpdateEntityInstanceMutationVariables>;
export const CreateComponentDocument = gql`
    mutation createComponent($name: String!, $properties: [PropertyTypeDefinition!]) {
  types {
    components {
      create(name: $name, properties: $properties) {
        ...FullComponent
      }
    }
  }
}
    ${FullComponentFragmentDoc}`;
export type CreateComponentMutationFn = Apollo.MutationFunction<CreateComponentMutation, CreateComponentMutationVariables>;

/**
 * __useCreateComponentMutation__
 *
 * To run a mutation, you first call `useCreateComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComponentMutation, { data, loading, error }] = useCreateComponentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      properties: // value for 'properties'
 *   },
 * });
 */
export function useCreateComponentMutation(baseOptions?: Apollo.MutationHookOptions<CreateComponentMutation, CreateComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateComponentMutation, CreateComponentMutationVariables>(CreateComponentDocument, options);
      }
export type CreateComponentMutationHookResult = ReturnType<typeof useCreateComponentMutation>;
export type CreateComponentMutationResult = Apollo.MutationResult<CreateComponentMutation>;
export type CreateComponentMutationOptions = Apollo.BaseMutationOptions<CreateComponentMutation, CreateComponentMutationVariables>;
export const DeleteComponentDocument = gql`
    mutation deleteComponent($name: String!) {
  types {
    components {
      delete(name: $name)
    }
  }
}
    `;
export type DeleteComponentMutationFn = Apollo.MutationFunction<DeleteComponentMutation, DeleteComponentMutationVariables>;

/**
 * __useDeleteComponentMutation__
 *
 * To run a mutation, you first call `useDeleteComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteComponentMutation, { data, loading, error }] = useDeleteComponentMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useDeleteComponentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteComponentMutation, DeleteComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteComponentMutation, DeleteComponentMutationVariables>(DeleteComponentDocument, options);
      }
export type DeleteComponentMutationHookResult = ReturnType<typeof useDeleteComponentMutation>;
export type DeleteComponentMutationResult = Apollo.MutationResult<DeleteComponentMutation>;
export type DeleteComponentMutationOptions = Apollo.BaseMutationOptions<DeleteComponentMutation, DeleteComponentMutationVariables>;
export const GetAllComponentsDocument = gql`
    query getAllComponents {
  types {
    components {
      ...FullComponent
    }
  }
}
    ${FullComponentFragmentDoc}`;

/**
 * __useGetAllComponentsQuery__
 *
 * To run a query within a React component, call `useGetAllComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllComponentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllComponentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllComponentsQuery, GetAllComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllComponentsQuery, GetAllComponentsQueryVariables>(GetAllComponentsDocument, options);
      }
export function useGetAllComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllComponentsQuery, GetAllComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllComponentsQuery, GetAllComponentsQueryVariables>(GetAllComponentsDocument, options);
        }
export type GetAllComponentsQueryHookResult = ReturnType<typeof useGetAllComponentsQuery>;
export type GetAllComponentsLazyQueryHookResult = ReturnType<typeof useGetAllComponentsLazyQuery>;
export type GetAllComponentsQueryResult = Apollo.QueryResult<GetAllComponentsQuery, GetAllComponentsQueryVariables>;
export const GetComponentByNameDocument = gql`
    query getComponentByName($name: String!) {
  types {
    components(name: $name) {
      ...FullComponent
    }
  }
}
    ${FullComponentFragmentDoc}`;

/**
 * __useGetComponentByNameQuery__
 *
 * To run a query within a React component, call `useGetComponentByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetComponentByNameQuery(baseOptions: Apollo.QueryHookOptions<GetComponentByNameQuery, GetComponentByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComponentByNameQuery, GetComponentByNameQueryVariables>(GetComponentByNameDocument, options);
      }
export function useGetComponentByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComponentByNameQuery, GetComponentByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComponentByNameQuery, GetComponentByNameQueryVariables>(GetComponentByNameDocument, options);
        }
export type GetComponentByNameQueryHookResult = ReturnType<typeof useGetComponentByNameQuery>;
export type GetComponentByNameLazyQueryHookResult = ReturnType<typeof useGetComponentByNameLazyQuery>;
export type GetComponentByNameQueryResult = Apollo.QueryResult<GetComponentByNameQuery, GetComponentByNameQueryVariables>;
export const GetEntityTypesUsesComponentByNameDocument = gql`
    query getEntityTypesUsesComponentByName($name: String!) {
  types {
    components(name: $name) {
      entityTypes {
        ...FullEntityType
      }
    }
  }
}
    ${FullEntityTypeFragmentDoc}`;

/**
 * __useGetEntityTypesUsesComponentByNameQuery__
 *
 * To run a query within a React component, call `useGetEntityTypesUsesComponentByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityTypesUsesComponentByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityTypesUsesComponentByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetEntityTypesUsesComponentByNameQuery(baseOptions: Apollo.QueryHookOptions<GetEntityTypesUsesComponentByNameQuery, GetEntityTypesUsesComponentByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntityTypesUsesComponentByNameQuery, GetEntityTypesUsesComponentByNameQueryVariables>(GetEntityTypesUsesComponentByNameDocument, options);
      }
export function useGetEntityTypesUsesComponentByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntityTypesUsesComponentByNameQuery, GetEntityTypesUsesComponentByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntityTypesUsesComponentByNameQuery, GetEntityTypesUsesComponentByNameQueryVariables>(GetEntityTypesUsesComponentByNameDocument, options);
        }
export type GetEntityTypesUsesComponentByNameQueryHookResult = ReturnType<typeof useGetEntityTypesUsesComponentByNameQuery>;
export type GetEntityTypesUsesComponentByNameLazyQueryHookResult = ReturnType<typeof useGetEntityTypesUsesComponentByNameLazyQuery>;
export type GetEntityTypesUsesComponentByNameQueryResult = Apollo.QueryResult<GetEntityTypesUsesComponentByNameQuery, GetEntityTypesUsesComponentByNameQueryVariables>;
export const GetRelationTypesUsesComponentByNameDocument = gql`
    query getRelationTypesUsesComponentByName($name: String!) {
  types {
    components(name: $name) {
      relationTypes {
        ...FullRelationType
      }
    }
  }
}
    ${FullRelationTypeFragmentDoc}`;

/**
 * __useGetRelationTypesUsesComponentByNameQuery__
 *
 * To run a query within a React component, call `useGetRelationTypesUsesComponentByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelationTypesUsesComponentByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelationTypesUsesComponentByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetRelationTypesUsesComponentByNameQuery(baseOptions: Apollo.QueryHookOptions<GetRelationTypesUsesComponentByNameQuery, GetRelationTypesUsesComponentByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelationTypesUsesComponentByNameQuery, GetRelationTypesUsesComponentByNameQueryVariables>(GetRelationTypesUsesComponentByNameDocument, options);
      }
export function useGetRelationTypesUsesComponentByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelationTypesUsesComponentByNameQuery, GetRelationTypesUsesComponentByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelationTypesUsesComponentByNameQuery, GetRelationTypesUsesComponentByNameQueryVariables>(GetRelationTypesUsesComponentByNameDocument, options);
        }
export type GetRelationTypesUsesComponentByNameQueryHookResult = ReturnType<typeof useGetRelationTypesUsesComponentByNameQuery>;
export type GetRelationTypesUsesComponentByNameLazyQueryHookResult = ReturnType<typeof useGetRelationTypesUsesComponentByNameLazyQuery>;
export type GetRelationTypesUsesComponentByNameQueryResult = Apollo.QueryResult<GetRelationTypesUsesComponentByNameQuery, GetRelationTypesUsesComponentByNameQueryVariables>;
export const SearchComponentByNameDocument = gql`
    query searchComponentByName($search: String!) {
  types {
    components(search: $search) {
      ...FullComponent
    }
  }
}
    ${FullComponentFragmentDoc}`;

/**
 * __useSearchComponentByNameQuery__
 *
 * To run a query within a React component, call `useSearchComponentByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchComponentByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchComponentByNameQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchComponentByNameQuery(baseOptions: Apollo.QueryHookOptions<SearchComponentByNameQuery, SearchComponentByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchComponentByNameQuery, SearchComponentByNameQueryVariables>(SearchComponentByNameDocument, options);
      }
export function useSearchComponentByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchComponentByNameQuery, SearchComponentByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchComponentByNameQuery, SearchComponentByNameQueryVariables>(SearchComponentByNameDocument, options);
        }
export type SearchComponentByNameQueryHookResult = ReturnType<typeof useSearchComponentByNameQuery>;
export type SearchComponentByNameLazyQueryHookResult = ReturnType<typeof useSearchComponentByNameLazyQuery>;
export type SearchComponentByNameQueryResult = Apollo.QueryResult<SearchComponentByNameQuery, SearchComponentByNameQueryVariables>;
export const CreateEntityTypeDocument = gql`
    mutation createEntityType($name: String!, $components: [String!], $properties: [PropertyTypeDefinition!], $extensions: [ExtensionDefinition!]) {
  types {
    entities {
      create(
        name: $name
        components: $components
        properties: $properties
        extensions: $extensions
      ) {
        ...FullEntityType
      }
    }
  }
}
    ${FullEntityTypeFragmentDoc}`;
export type CreateEntityTypeMutationFn = Apollo.MutationFunction<CreateEntityTypeMutation, CreateEntityTypeMutationVariables>;

/**
 * __useCreateEntityTypeMutation__
 *
 * To run a mutation, you first call `useCreateEntityTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEntityTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEntityTypeMutation, { data, loading, error }] = useCreateEntityTypeMutation({
 *   variables: {
 *      name: // value for 'name'
 *      components: // value for 'components'
 *      properties: // value for 'properties'
 *      extensions: // value for 'extensions'
 *   },
 * });
 */
export function useCreateEntityTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEntityTypeMutation, CreateEntityTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEntityTypeMutation, CreateEntityTypeMutationVariables>(CreateEntityTypeDocument, options);
      }
export type CreateEntityTypeMutationHookResult = ReturnType<typeof useCreateEntityTypeMutation>;
export type CreateEntityTypeMutationResult = Apollo.MutationResult<CreateEntityTypeMutation>;
export type CreateEntityTypeMutationOptions = Apollo.BaseMutationOptions<CreateEntityTypeMutation, CreateEntityTypeMutationVariables>;
export const DeleteEntityTypeDocument = gql`
    mutation deleteEntityType($name: String!) {
  types {
    entities {
      delete(name: $name)
    }
  }
}
    `;
export type DeleteEntityTypeMutationFn = Apollo.MutationFunction<DeleteEntityTypeMutation, DeleteEntityTypeMutationVariables>;

/**
 * __useDeleteEntityTypeMutation__
 *
 * To run a mutation, you first call `useDeleteEntityTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEntityTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEntityTypeMutation, { data, loading, error }] = useDeleteEntityTypeMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useDeleteEntityTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEntityTypeMutation, DeleteEntityTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEntityTypeMutation, DeleteEntityTypeMutationVariables>(DeleteEntityTypeDocument, options);
      }
export type DeleteEntityTypeMutationHookResult = ReturnType<typeof useDeleteEntityTypeMutation>;
export type DeleteEntityTypeMutationResult = Apollo.MutationResult<DeleteEntityTypeMutation>;
export type DeleteEntityTypeMutationOptions = Apollo.BaseMutationOptions<DeleteEntityTypeMutation, DeleteEntityTypeMutationVariables>;
export const GetAllEntityTypesDocument = gql`
    query getAllEntityTypes {
  types {
    entities {
      ...FullEntityType
    }
  }
}
    ${FullEntityTypeFragmentDoc}`;

/**
 * __useGetAllEntityTypesQuery__
 *
 * To run a query within a React component, call `useGetAllEntityTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEntityTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEntityTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEntityTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEntityTypesQuery, GetAllEntityTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEntityTypesQuery, GetAllEntityTypesQueryVariables>(GetAllEntityTypesDocument, options);
      }
export function useGetAllEntityTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEntityTypesQuery, GetAllEntityTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEntityTypesQuery, GetAllEntityTypesQueryVariables>(GetAllEntityTypesDocument, options);
        }
export type GetAllEntityTypesQueryHookResult = ReturnType<typeof useGetAllEntityTypesQuery>;
export type GetAllEntityTypesLazyQueryHookResult = ReturnType<typeof useGetAllEntityTypesLazyQuery>;
export type GetAllEntityTypesQueryResult = Apollo.QueryResult<GetAllEntityTypesQuery, GetAllEntityTypesQueryVariables>;
export const GetComponentsByEntityTypeDocument = gql`
    query getComponentsByEntityType($name: String!) {
  types {
    entities(name: $name) {
      components {
        ...FullComponent
      }
    }
  }
}
    ${FullComponentFragmentDoc}`;

/**
 * __useGetComponentsByEntityTypeQuery__
 *
 * To run a query within a React component, call `useGetComponentsByEntityTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentsByEntityTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentsByEntityTypeQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetComponentsByEntityTypeQuery(baseOptions: Apollo.QueryHookOptions<GetComponentsByEntityTypeQuery, GetComponentsByEntityTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComponentsByEntityTypeQuery, GetComponentsByEntityTypeQueryVariables>(GetComponentsByEntityTypeDocument, options);
      }
export function useGetComponentsByEntityTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComponentsByEntityTypeQuery, GetComponentsByEntityTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComponentsByEntityTypeQuery, GetComponentsByEntityTypeQueryVariables>(GetComponentsByEntityTypeDocument, options);
        }
export type GetComponentsByEntityTypeQueryHookResult = ReturnType<typeof useGetComponentsByEntityTypeQuery>;
export type GetComponentsByEntityTypeLazyQueryHookResult = ReturnType<typeof useGetComponentsByEntityTypeLazyQuery>;
export type GetComponentsByEntityTypeQueryResult = Apollo.QueryResult<GetComponentsByEntityTypeQuery, GetComponentsByEntityTypeQueryVariables>;
export const GetEntityTypeByNameDocument = gql`
    query getEntityTypeByName($name: String!) {
  types {
    entities(name: $name) {
      ...FullEntityType
    }
  }
}
    ${FullEntityTypeFragmentDoc}`;

/**
 * __useGetEntityTypeByNameQuery__
 *
 * To run a query within a React component, call `useGetEntityTypeByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEntityTypeByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEntityTypeByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetEntityTypeByNameQuery(baseOptions: Apollo.QueryHookOptions<GetEntityTypeByNameQuery, GetEntityTypeByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEntityTypeByNameQuery, GetEntityTypeByNameQueryVariables>(GetEntityTypeByNameDocument, options);
      }
export function useGetEntityTypeByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEntityTypeByNameQuery, GetEntityTypeByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEntityTypeByNameQuery, GetEntityTypeByNameQueryVariables>(GetEntityTypeByNameDocument, options);
        }
export type GetEntityTypeByNameQueryHookResult = ReturnType<typeof useGetEntityTypeByNameQuery>;
export type GetEntityTypeByNameLazyQueryHookResult = ReturnType<typeof useGetEntityTypeByNameLazyQuery>;
export type GetEntityTypeByNameQueryResult = Apollo.QueryResult<GetEntityTypeByNameQuery, GetEntityTypeByNameQueryVariables>;
export const GetInboundRelationsByEntityTypeDocument = gql`
    query getInboundRelationsByEntityType($name: String!) {
  types {
    entities(name: $name) {
      inboundRelations {
        ...FullRelationType
      }
    }
  }
}
    ${FullRelationTypeFragmentDoc}`;

/**
 * __useGetInboundRelationsByEntityTypeQuery__
 *
 * To run a query within a React component, call `useGetInboundRelationsByEntityTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInboundRelationsByEntityTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInboundRelationsByEntityTypeQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetInboundRelationsByEntityTypeQuery(baseOptions: Apollo.QueryHookOptions<GetInboundRelationsByEntityTypeQuery, GetInboundRelationsByEntityTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInboundRelationsByEntityTypeQuery, GetInboundRelationsByEntityTypeQueryVariables>(GetInboundRelationsByEntityTypeDocument, options);
      }
export function useGetInboundRelationsByEntityTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInboundRelationsByEntityTypeQuery, GetInboundRelationsByEntityTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInboundRelationsByEntityTypeQuery, GetInboundRelationsByEntityTypeQueryVariables>(GetInboundRelationsByEntityTypeDocument, options);
        }
export type GetInboundRelationsByEntityTypeQueryHookResult = ReturnType<typeof useGetInboundRelationsByEntityTypeQuery>;
export type GetInboundRelationsByEntityTypeLazyQueryHookResult = ReturnType<typeof useGetInboundRelationsByEntityTypeLazyQuery>;
export type GetInboundRelationsByEntityTypeQueryResult = Apollo.QueryResult<GetInboundRelationsByEntityTypeQuery, GetInboundRelationsByEntityTypeQueryVariables>;
export const GetOutboundRelationsByEntityTypeDocument = gql`
    query getOutboundRelationsByEntityType($name: String!) {
  types {
    entities(name: $name) {
      outboundRelations {
        ...FullRelationType
      }
    }
  }
}
    ${FullRelationTypeFragmentDoc}`;

/**
 * __useGetOutboundRelationsByEntityTypeQuery__
 *
 * To run a query within a React component, call `useGetOutboundRelationsByEntityTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOutboundRelationsByEntityTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOutboundRelationsByEntityTypeQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetOutboundRelationsByEntityTypeQuery(baseOptions: Apollo.QueryHookOptions<GetOutboundRelationsByEntityTypeQuery, GetOutboundRelationsByEntityTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOutboundRelationsByEntityTypeQuery, GetOutboundRelationsByEntityTypeQueryVariables>(GetOutboundRelationsByEntityTypeDocument, options);
      }
export function useGetOutboundRelationsByEntityTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOutboundRelationsByEntityTypeQuery, GetOutboundRelationsByEntityTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOutboundRelationsByEntityTypeQuery, GetOutboundRelationsByEntityTypeQueryVariables>(GetOutboundRelationsByEntityTypeDocument, options);
        }
export type GetOutboundRelationsByEntityTypeQueryHookResult = ReturnType<typeof useGetOutboundRelationsByEntityTypeQuery>;
export type GetOutboundRelationsByEntityTypeLazyQueryHookResult = ReturnType<typeof useGetOutboundRelationsByEntityTypeLazyQuery>;
export type GetOutboundRelationsByEntityTypeQueryResult = Apollo.QueryResult<GetOutboundRelationsByEntityTypeQuery, GetOutboundRelationsByEntityTypeQueryVariables>;
export const SearchEntityTypesByNameDocument = gql`
    query searchEntityTypesByName($search: String!) {
  types {
    entities(search: $search) {
      ...FullEntityType
    }
  }
}
    ${FullEntityTypeFragmentDoc}`;

/**
 * __useSearchEntityTypesByNameQuery__
 *
 * To run a query within a React component, call `useSearchEntityTypesByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEntityTypesByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchEntityTypesByNameQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchEntityTypesByNameQuery(baseOptions: Apollo.QueryHookOptions<SearchEntityTypesByNameQuery, SearchEntityTypesByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchEntityTypesByNameQuery, SearchEntityTypesByNameQueryVariables>(SearchEntityTypesByNameDocument, options);
      }
export function useSearchEntityTypesByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchEntityTypesByNameQuery, SearchEntityTypesByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchEntityTypesByNameQuery, SearchEntityTypesByNameQueryVariables>(SearchEntityTypesByNameDocument, options);
        }
export type SearchEntityTypesByNameQueryHookResult = ReturnType<typeof useSearchEntityTypesByNameQuery>;
export type SearchEntityTypesByNameLazyQueryHookResult = ReturnType<typeof useSearchEntityTypesByNameLazyQuery>;
export type SearchEntityTypesByNameQueryResult = Apollo.QueryResult<SearchEntityTypesByNameQuery, SearchEntityTypesByNameQueryVariables>;
export const CreateRelationTypeDocument = gql`
    mutation createRelationType($outboundType: String!, $name: String!, $inboundType: String!, $components: [String!], $properties: [PropertyTypeDefinition!], $extensions: [ExtensionDefinition!]) {
  types {
    relations {
      create(
        outboundType: $outboundType
        name: $name
        inboundType: $inboundType
        components: $components
        properties: $properties
        extensions: $extensions
      ) {
        ...FullRelationType
      }
    }
  }
}
    ${FullRelationTypeFragmentDoc}`;
export type CreateRelationTypeMutationFn = Apollo.MutationFunction<CreateRelationTypeMutation, CreateRelationTypeMutationVariables>;

/**
 * __useCreateRelationTypeMutation__
 *
 * To run a mutation, you first call `useCreateRelationTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRelationTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRelationTypeMutation, { data, loading, error }] = useCreateRelationTypeMutation({
 *   variables: {
 *      outboundType: // value for 'outboundType'
 *      name: // value for 'name'
 *      inboundType: // value for 'inboundType'
 *      components: // value for 'components'
 *      properties: // value for 'properties'
 *      extensions: // value for 'extensions'
 *   },
 * });
 */
export function useCreateRelationTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRelationTypeMutation, CreateRelationTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRelationTypeMutation, CreateRelationTypeMutationVariables>(CreateRelationTypeDocument, options);
      }
export type CreateRelationTypeMutationHookResult = ReturnType<typeof useCreateRelationTypeMutation>;
export type CreateRelationTypeMutationResult = Apollo.MutationResult<CreateRelationTypeMutation>;
export type CreateRelationTypeMutationOptions = Apollo.BaseMutationOptions<CreateRelationTypeMutation, CreateRelationTypeMutationVariables>;
export const DeleteRelationTypeDocument = gql`
    mutation deleteRelationType($name: String!) {
  types {
    relations {
      delete(name: $name)
    }
  }
}
    `;
export type DeleteRelationTypeMutationFn = Apollo.MutationFunction<DeleteRelationTypeMutation, DeleteRelationTypeMutationVariables>;

/**
 * __useDeleteRelationTypeMutation__
 *
 * To run a mutation, you first call `useDeleteRelationTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRelationTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRelationTypeMutation, { data, loading, error }] = useDeleteRelationTypeMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useDeleteRelationTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRelationTypeMutation, DeleteRelationTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRelationTypeMutation, DeleteRelationTypeMutationVariables>(DeleteRelationTypeDocument, options);
      }
export type DeleteRelationTypeMutationHookResult = ReturnType<typeof useDeleteRelationTypeMutation>;
export type DeleteRelationTypeMutationResult = Apollo.MutationResult<DeleteRelationTypeMutation>;
export type DeleteRelationTypeMutationOptions = Apollo.BaseMutationOptions<DeleteRelationTypeMutation, DeleteRelationTypeMutationVariables>;
export const GetAllRelationTypesDocument = gql`
    query getAllRelationTypes {
  types {
    relations {
      ...FullRelationType
    }
  }
}
    ${FullRelationTypeFragmentDoc}`;

/**
 * __useGetAllRelationTypesQuery__
 *
 * To run a query within a React component, call `useGetAllRelationTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRelationTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRelationTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRelationTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllRelationTypesQuery, GetAllRelationTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRelationTypesQuery, GetAllRelationTypesQueryVariables>(GetAllRelationTypesDocument, options);
      }
export function useGetAllRelationTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRelationTypesQuery, GetAllRelationTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRelationTypesQuery, GetAllRelationTypesQueryVariables>(GetAllRelationTypesDocument, options);
        }
export type GetAllRelationTypesQueryHookResult = ReturnType<typeof useGetAllRelationTypesQuery>;
export type GetAllRelationTypesLazyQueryHookResult = ReturnType<typeof useGetAllRelationTypesLazyQuery>;
export type GetAllRelationTypesQueryResult = Apollo.QueryResult<GetAllRelationTypesQuery, GetAllRelationTypesQueryVariables>;
export const GetComponentsByRelationTypeDocument = gql`
    query getComponentsByRelationType($name: String!) {
  types {
    relations(name: $name) {
      components {
        ...FullComponent
      }
    }
  }
}
    ${FullComponentFragmentDoc}`;

/**
 * __useGetComponentsByRelationTypeQuery__
 *
 * To run a query within a React component, call `useGetComponentsByRelationTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentsByRelationTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentsByRelationTypeQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetComponentsByRelationTypeQuery(baseOptions: Apollo.QueryHookOptions<GetComponentsByRelationTypeQuery, GetComponentsByRelationTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComponentsByRelationTypeQuery, GetComponentsByRelationTypeQueryVariables>(GetComponentsByRelationTypeDocument, options);
      }
export function useGetComponentsByRelationTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComponentsByRelationTypeQuery, GetComponentsByRelationTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComponentsByRelationTypeQuery, GetComponentsByRelationTypeQueryVariables>(GetComponentsByRelationTypeDocument, options);
        }
export type GetComponentsByRelationTypeQueryHookResult = ReturnType<typeof useGetComponentsByRelationTypeQuery>;
export type GetComponentsByRelationTypeLazyQueryHookResult = ReturnType<typeof useGetComponentsByRelationTypeLazyQuery>;
export type GetComponentsByRelationTypeQueryResult = Apollo.QueryResult<GetComponentsByRelationTypeQuery, GetComponentsByRelationTypeQueryVariables>;
export const GetRelationTypeByNameDocument = gql`
    query getRelationTypeByName($name: String!) {
  types {
    relations(name: $name) {
      ...FullRelationType
    }
  }
}
    ${FullRelationTypeFragmentDoc}`;

/**
 * __useGetRelationTypeByNameQuery__
 *
 * To run a query within a React component, call `useGetRelationTypeByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelationTypeByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelationTypeByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetRelationTypeByNameQuery(baseOptions: Apollo.QueryHookOptions<GetRelationTypeByNameQuery, GetRelationTypeByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelationTypeByNameQuery, GetRelationTypeByNameQueryVariables>(GetRelationTypeByNameDocument, options);
      }
export function useGetRelationTypeByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelationTypeByNameQuery, GetRelationTypeByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelationTypeByNameQuery, GetRelationTypeByNameQueryVariables>(GetRelationTypeByNameDocument, options);
        }
export type GetRelationTypeByNameQueryHookResult = ReturnType<typeof useGetRelationTypeByNameQuery>;
export type GetRelationTypeByNameLazyQueryHookResult = ReturnType<typeof useGetRelationTypeByNameLazyQuery>;
export type GetRelationTypeByNameQueryResult = Apollo.QueryResult<GetRelationTypeByNameQuery, GetRelationTypeByNameQueryVariables>;
export const SearchRelationTypesByNameDocument = gql`
    query searchRelationTypesByName($search: String!) {
  types {
    relations(search: $search) {
      ...FullRelationType
    }
  }
}
    ${FullRelationTypeFragmentDoc}`;

/**
 * __useSearchRelationTypesByNameQuery__
 *
 * To run a query within a React component, call `useSearchRelationTypesByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRelationTypesByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRelationTypesByNameQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchRelationTypesByNameQuery(baseOptions: Apollo.QueryHookOptions<SearchRelationTypesByNameQuery, SearchRelationTypesByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRelationTypesByNameQuery, SearchRelationTypesByNameQueryVariables>(SearchRelationTypesByNameDocument, options);
      }
export function useSearchRelationTypesByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRelationTypesByNameQuery, SearchRelationTypesByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRelationTypesByNameQuery, SearchRelationTypesByNameQueryVariables>(SearchRelationTypesByNameDocument, options);
        }
export type SearchRelationTypesByNameQueryHookResult = ReturnType<typeof useSearchRelationTypesByNameQuery>;
export type SearchRelationTypesByNameLazyQueryHookResult = ReturnType<typeof useSearchRelationTypesByNameLazyQuery>;
export type SearchRelationTypesByNameQueryResult = Apollo.QueryResult<SearchRelationTypesByNameQuery, SearchRelationTypesByNameQueryVariables>;