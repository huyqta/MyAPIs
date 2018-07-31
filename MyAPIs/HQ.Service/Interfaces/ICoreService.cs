using System;
using System.Collections.Generic;
using System.Text;
using HQ.Entity;
using HQ.Service.Interfaces;

namespace HQ.Service.Interfaces
{
    public interface ICoreService<TEntity> where TEntity : BaseEntity
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
        TEntity Insert(TEntity entity);
        TEntity Update(TEntity entity);
        bool Delete(int id);
    }
}
