using System;
using System.Collections.Generic;
using System.Text;

namespace HQ.Service.Interfaces
{
    public interface IEntity : TEntity
    {
        string Id { get; set; }
    }
}
