"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    modelQuery;
    query;
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchableFields) {
        const searchTerm = this?.query?.searchTerm || '';
        if (this) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(field => ({
                    [field]: { $regex: searchTerm, $options: 'i' },
                })),
            });
        }
        return this;
    }
    filter() {
        const queryObj = { ...this.query };
        const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }
    sort() {
        const sort = this?.query?.sort?.split(',')?.join(' ') || '-createdAt';
        this.modelQuery = this.modelQuery.sort(sort);
        return this;
    }
    paginate() {
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    fields() {
        const fields = this.query && this.query.fields && typeof this.query.fields === 'string'
            ? this.query.fields.split(',').join(' ')
            : '-__v';
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=QueryBuilder.js.map