﻿using HQ.Entity;
using HQ.Service.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;

namespace HQ.Service.Services
{
    public class CoreService<TEntity> : ICoreService<TEntity> where TEntity : BaseEntity
    {
        private readonly EFDbContext _context;
        private DbSet<TEntity> entities;

        public CoreService(EFDbContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException("context");
            }
            this._context = context;
            entities = this._context.Set<TEntity>();
        }

        public bool Delete(int id)
        {
            try
            {
                var entity = entities.Find(id);

                if (entity == null)
                {
                    throw new ArgumentNullException("entity");
                }

                entities.Remove(entity);
                this._context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public TEntity Get(int id)
        {
            return entities.SingleOrDefault(s => s.Id == id);
        }

        public IEnumerable<TEntity> GetByForeignId(string foreignField, int id)
        {
            var query = string.Format("SELECT * FROM {0} WHERE {1} = '{2}'", typeof(TEntity).Name, foreignField, id);
            return entities.FromSql<TEntity>(query).AsEnumerable();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return entities.AsEnumerable();
        }

        public Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return Task.FromResult(entities.AsEnumerable());
        }

        public TEntity Insert(TEntity entity)
        {
            try
            {
                if (entity == null)
                {
                    throw new ArgumentNullException("entity");
                }
                entities.Add(entity);
                this._context.SaveChanges();
                return entity;
            }
            catch
            {
                return null;
            }
        }

        public TEntity Update(TEntity entity)
        {
            try
            {
                if (entity == null)
                {
                    throw new ArgumentNullException("entity");
                }
                entities.Update(entity);
                this._context.SaveChanges();
                return entity;
            }
            catch
            {
                return null;
            }
        }
    }
}
